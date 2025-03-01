"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
class WeatherController {
    weatherService;
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    async getWeather(ctx) {
        const weather = await this.weatherService.getWeatherService(ctx);
        return weather;
    }
}
exports.WeatherController = WeatherController;
