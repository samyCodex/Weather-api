"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_router_1 = __importDefault(require("./weather.router"));
const IndexRouter = (0, express_1.Router)();
IndexRouter.use('/weather', weather_router_1.default);
exports.default = IndexRouter;
