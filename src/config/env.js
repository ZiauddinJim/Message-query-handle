import dotenv from "dotenv";
dotenv.config();

export const env = {
    PORT: Number(process.env.PORT),
    MONGO_URI: process.env.MONGO_URI,
    REDIS_URL: process.env.REDIS_URL,
    CACHE_TTL_SECONDS: Number(process.env.CACHE_TTL_SECONDS),
    UPLOAD_DIR: process.env.UPLOAD_DIR,
    BCRYPT_ROUNDS: Number(process.env.BCRYPT_ROUNDS),
};