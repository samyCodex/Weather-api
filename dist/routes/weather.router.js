"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_controller_1 = require("../controllers/weather.controller");
const weather_service_1 = require("../services/weather.service");
const weatherRouter = (0, express_1.Router)();
const service = new weather_service_1.WeatherService();
const controller = new weather_controller_1.WeatherController(service);
weatherRouter.get("/", async (req, res) => {
    try {
        const { query } = req;
        console.log(query);
        const weather = await controller.getWeather(query.city);
        res.status(200).json(weather);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});
exports.default = weatherRouter;
