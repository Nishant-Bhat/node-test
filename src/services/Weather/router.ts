import { Request, Response } from "express"
import {  saveWeatherDetailsController } from "./WeatherController"



export default [
  {
    path: "/get/location/weather/details",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        const result = await saveWeatherDetailsController(req)
        res.locals.resObj= result        
        res.status(200).send(result)
      }
    ]
  }
]