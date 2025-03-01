import { WeatherService } from "../services/weather.service";

export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  public async getWeather(ctx: any) {
    const weather = await this.weatherService.getWeatherService(ctx);
    return weather
}
}
