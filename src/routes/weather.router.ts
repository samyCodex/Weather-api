import { Router, Request, Response } from "express";
import { WeatherController } from "../controllers/weather.controller";
import { WeatherService } from "../services/weather.service";


const weatherRouter: Router = Router();
const service = new WeatherService();
const controller = new WeatherController(service)


weatherRouter.get("/", async (req: Request, res: Response): Promise<void> => { 
    try {
         const { query } = req;
         console.log(query)
         const weather = await controller.getWeather(query.city as string);
         res.status(200).json(weather);
    } catch (error) {
         console.log(error.message);
          res.status(500).json({ error: error.message });
    } 
});


export default weatherRouter;