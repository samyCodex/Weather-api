"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const redisClient = (0, redis_1.createClient)({ url: process.env.REDIS_URL });
redisClient.on('error', (err) => console.error('Redis error:', err));
(async () => {
    await redisClient.connect();
    console.log('Connected to Redis');
})();
const cache = {
    async get(key) {
        const data = await redisClient.get(key);
        return data ? JSON.parse(data) : null;
    },
    async set(key, value, ttl = 3600) {
        await redisClient.set(key, JSON.stringify(value), { EX: ttl });
    },
};
exports.default = cache;
