import { Router } from "express";
import weatherRouter from "./weather.router";

const IndexRouter: Router = Router();


IndexRouter.use('/weather', weatherRouter);

export default IndexRouter;