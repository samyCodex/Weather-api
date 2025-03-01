import axios from "axios";
import axiosRetry from 'axios-retry'
import pLimit from "p-limit";
import cache from '../config/redis';


axiosRetry(axios, { retries: 3 });

const limit = pLimit(5);

const API_URL = process.env.WEATHER_API_URL || '';

const getWeatherApi = async (city: string) => {
    const key = `weather:${city}`;
    const cached = await cache.get(key);

    if (cached) {
        return cached;
    }
    const token = process.env.WEATHER_API_TOKEN || '';
    const response = await limit(() => axios.get(`${API_URL}/current.json`, {
        params: {
            key: token,
            q: city,
            aqi: 'no'
        }
    }));
    const data = response.data;
    await cache.set(key, data, 60);

    return data;
};

export default getWeatherApi;