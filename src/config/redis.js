import Redis from "ioredis";
import { env } from "./env";

export const redis = new Redis(env.REDIS_URL, {
    maxRetriesPerRequest: null,
});
redis.on("error", e => console.error("Redis error: ", e));