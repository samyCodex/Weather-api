"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const p_limit_1 = __importDefault(require("p-limit"));
const redis_1 = __importDefault(require("../config/redis"));
(0, axios_retry_1.default)(axios_1.default, { retries: 3 });
const limit = (0, p_limit_1.default)(5);
const API_URL = process.env.WEATHER_API_URL || '';
const getWeatherApi = async (city) => {
    const key = `weather:${city}`;
    const cached = await redis_1.default.get(key);
    if (cached) {
        return cached;
    }
    const token = process.env.WEATHER_API_TOKEN || '';
    const response = await limit(() => axios_1.default.get(`${API_URL}/current.json`, {
        params: {
            key: token,
            q: city,
            aqi: 'no'
        }
    }));
    const data = response.data;
    await redis_1.default.set(key, data, 60);
    return data;
};
exports.default = getWeatherApi;
