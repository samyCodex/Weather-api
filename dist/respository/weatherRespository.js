"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherRespository = void 0;
const weatherApi_1 = __importDefault(require("../integration/weatherApi"));
class WeatherRespository {
    async getWeather(city) {
        const weather = await (0, weatherApi_1.default)(city);
        return weather;
    }
}
exports.WeatherRespository = WeatherRespository;
