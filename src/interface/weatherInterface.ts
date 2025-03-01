export interface WeatherInterface {
    getWeather(city: string): Promise<any>;
}  