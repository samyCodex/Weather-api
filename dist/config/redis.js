// import { createClient } from 'redis';
// import dotenv from 'dotenv';
// dotenv.config();
// const redisClient = createClient({ url: process.env.REDIS_URL });
// redisClient.on('error', (err) => console.error('Redis error:', err));
// (async () => {
//     await redisClient.connect();
//     console.log('Connected to Redis');
// })();
// const cache = {
//     async get(key: string) {
//         const data = await redisClient.get(key);
//         return data ? JSON.parse(data) : null;
//     },
//     async set(key: string, value: any, ttl: number = 3600) {
//         await redisClient.set(key, JSON.stringify(value), { EX: ttl });
//     },
// };
// export default cache;
