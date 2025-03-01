"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
// Apply retry logic to axios
(0, axios_retry_1.default)(axios_1.default, {
    retries: 3, // Number of retries
    retryDelay: (retryCount) => {
        console.log(`Retry attempt: ${retryCount}`);
        return retryCount * 1000; // Delay in ms
    },
    retryCondition: (error) => {
        // Retry only on network errors or 5xx status codes
        return axios_retry_1.default.isNetworkOrIdempotentRequestError(error) || error.response?.status >= 500;
    },
});
const getWeatherApi = async (city) => {
    try {
        const response = await axios_1.default.get(process.env.WEATHER_API_URL, {
            params: {
                key: process.env.WEATHER_API_TOKEN,
                q: city,
            },
        });
        return response.data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error fetching weather:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
        }
        else {
            console.error('Unexpected error:', error);
        }
    }
};
// Example usage:
exports.default = getWeatherApi;
