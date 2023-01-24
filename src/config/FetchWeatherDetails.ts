import axios, { AxiosResponse } from 'axios';


export const fetchWeatherDetails=async (weatherDetailsType:string,locationName:string)=>{
  try {
    const ApiKey=process.env.WEATHER_API;
    let baseURL:string=process.env.BASE_URL?process.env.BASE_URL:"";
    if(weatherDetailsType==="current"){
      baseURL=baseURL+"current.json?key="+ApiKey+"&q="+locationName+"&aqi=no"
    }else{
      baseURL=baseURL+"forecast.json?key="+ApiKey+"&q="+locationName+"&days=1&aqi=no&&alerts=no"
    }
    const response: AxiosResponse = await axios.get(baseURL)
    return { message: "success", status: 200, error: [] ,data:response.data,requestedUrl:baseURL}

  } catch (error) {
    console.log(error)
    return { message: "not able to fetch data.", status: 400, error: error ,data:[]}
        
  }
}