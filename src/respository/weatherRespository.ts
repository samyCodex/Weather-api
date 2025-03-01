import getWeatherApi from "../integration/weatherApi";
import { WeatherInterface } from "../interface/weatherInterface";



export class WeatherRespository implements WeatherInterface  {
        
       public async getWeather(city: string): Promise<any> {
                const weather = await getWeatherApi(city);
                return weather
       }
}