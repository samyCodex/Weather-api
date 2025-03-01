"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
require("../integration/aiUtils");
const weatherRespository_1 = require("../respository/weatherRespository");
class WeatherService extends weatherRespository_1.WeatherRespository {
    constructor() {
        super();
    }
    getWeatherService(city) {
        return this.getWeather(city);
    }
}
exports.WeatherService = WeatherService;
