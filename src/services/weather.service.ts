import '../integration/aiUtils'
import { WeatherRespository } from "../respository/weatherRespository";

export class WeatherService extends WeatherRespository {
  constructor() {
    super();
  }
  public getWeatherService(city: string): Promise<any> {
     return this.getWeather(city);
  }
}
