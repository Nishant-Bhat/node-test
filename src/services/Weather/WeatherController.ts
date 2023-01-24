import {  saveWeatherDetailsProvider } from "./Providers/WeatherProvider"



export const saveWeatherDetailsController = async (req:any) => {
  try{
    if(req.body.locationName){
      return await saveWeatherDetailsProvider(req)
    }else{
      return { message: "Please enter a vaild location to get weather details.", status: 400, error: [] ,data:[]}
    }
  }
  catch (error) {
    return { message: "error in controller", status: 500, error: error,data:[] }
  }
  
}

