import { promises as fs } from "fs";
import path from "path";

const COUNTER_KEY = "singhhimanshu:visitors";
const FILE_PATH = path.join(process.cwd(), ".data", "visitors.json");

type CounterStore = { count: number };

function envRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function redisGet(url: string, token: string): Promise<number | null> {
  const res = await fetch(`${url}/get/${encodeURIComponent(COUNTER_KEY)}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result?: string | null };
  const n = Number(data.result);
  return Number.isFinite(n) ? n : null;
}

async function redisIncr(url: string, token: string): Promise<number | null> {
  const res = await fetch(`${url}/incr/${encodeURIComponent(COUNTER_KEY)}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result?: number };
  const n = Number(data.result);
  return Number.isFinite(n) ? n : null;
}

async function readFileStore(): Promise<CounterStore> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as CounterStore;
    if (typeof parsed.count === "number" && parsed.count >= 0) return parsed;
  } catch {
    /* first run */
  }
  return { count: 0 };
}

async function writeFileStore(store: CounterStore) {
  await fs.mkdir(path.dirname(FILE_PATH), { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(store), "utf8");
}

/** In-memory fallback for serverless without Redis (resets on cold start). */
let memoryCount = 0;

export async function getVisitorCount(): Promise<number> {
  const redis = envRedis();
  if (redis) {
    const n = await redisGet(redis.url, redis.token);
    if (n !== null) return n;
  }

  try {
    const store = await readFileStore();
    memoryCount = Math.max(memoryCount, store.count);
    return memoryCount;
  } catch {
    return memoryCount;
  }
}

export async function incrementVisitorCount(): Promise<number> {
  const redis = envRedis();
  if (redis) {
    const n = await redisIncr(redis.url, redis.token);
    if (n !== null) return n;
  }

  try {
    const store = await readFileStore();
    store.count += 1;
    memoryCount = store.count;
    await writeFileStore(store);
    return store.count;
  } catch {
    memoryCount += 1;
    return memoryCount;
  }
}
