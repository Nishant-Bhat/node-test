
import{fetchWeatherDetails} from '../../../config/FetchWeatherDetails'
import{weather_data_url} from '../../../DB/entity/weather_db/weather_data_url'
import{weather_data_current} from '../../../DB/entity/weather_db/weather_data_current'
import{weather_data_forecast} from '../../../DB/entity/weather_db/weather_data_forecast'
import {getAllDatabaseConnection} from '../../../config/SqlDataBaseConnection'

export const saveWeatherDetailsProvider = async (req:any) => {
  try{
    const locationName=req.body.locationName?req.body.locationName:"";
    const slaveSchema = await getAllDatabaseConnection("AppSlave")
    const masterSchema = await getAllDatabaseConnection("AppMaster")
    if(slaveSchema&&masterSchema){
      if(locationName){
        const currentWeatherDetails=await fetchWeatherDetails("current",locationName);
        const weatherUrlData=new weather_data_url();
        weatherUrlData.weather_data_created_at=new Date();
        weatherUrlData.weather_data_status=1;
        weatherUrlData.weather_data_url_name=locationName;
        weatherUrlData.weather_data_url_type="current|forecast";
        const weatherCurrentObj=new weather_data_current();
        const weatherForecastObj=new weather_data_forecast();
        if(currentWeatherDetails.status===200&&currentWeatherDetails.data){
          weatherUrlData.weather_data_current_url=currentWeatherDetails.requestedUrl?currentWeatherDetails.requestedUrl:"";
          const weatherCurrentData=currentWeatherDetails.data.location;
          weatherCurrentObj.weather_location_country=weatherCurrentData.country;
          weatherCurrentObj.weather_location_region=weatherCurrentData.region;
          weatherCurrentObj.weather_location_name=weatherCurrentData.name;
          weatherCurrentObj.weather_location_lat=weatherCurrentData.lat;
          weatherCurrentObj.weather_location_lon=weatherCurrentData.lon;
          weatherCurrentObj.weather_location_other_data=JSON.stringify(currentWeatherDetails.data)
          weatherCurrentObj.weather_location_status=1
          weatherCurrentObj.weather_location_tz_id=weatherCurrentData.tz_id;
          weatherCurrentObj.weather_location_localtime=weatherCurrentData.localtime
          weatherCurrentObj.weather_location_created_at=new Date()
        }else{
          console.log(currentWeatherDetails)
          return { message: "Not able to find weather details-1.", status: 400, error: [] ,data:[]}
        }
       
        const forecastWeatherDetails=await fetchWeatherDetails("forecast",locationName);
        if(forecastWeatherDetails.status===200&&forecastWeatherDetails.data){
          weatherUrlData.weather_data_forecast_url=currentWeatherDetails.requestedUrl?currentWeatherDetails.requestedUrl:"";
          const weatherForecastLocationData=currentWeatherDetails.data.location;
          const weatherForecastAstroData=forecastWeatherDetails.data.forecast.forecastday[0].astro;
          weatherForecastObj.weather_forecast_country=weatherForecastLocationData.country
          weatherForecastObj.weather_forecast_created_at=new Date()
          weatherForecastObj.weather_forecast_moon_illumination=weatherForecastAstroData.moon_illumination
          weatherForecastObj.weather_forecast_moon_phase=weatherForecastAstroData.moon_phase
          weatherForecastObj.weather_forecast_moonrise=weatherForecastAstroData.moonrise
          weatherForecastObj.weather_forecast_moonset=weatherForecastAstroData.moonset
          weatherForecastObj.weather_forecast_region=weatherForecastLocationData.region
          weatherForecastObj.weather_forecast_other_data=JSON.stringify(forecastWeatherDetails.data);
          weatherForecastObj.weather_forecast_name=weatherForecastLocationData.name
          weatherForecastObj.weather_forecast_sunrise=weatherForecastAstroData.sunrise
          weatherForecastObj.weather_forecast_sunset=weatherForecastAstroData.sunset
        }else{
          return { message: "Not able to find weather details-2.", status: 400, error: [] ,data:[]}
        
        }

        const weatherURLDb=await masterSchema.getRepository(weather_data_url).save(weatherUrlData)
        weatherCurrentObj.weather_url_id= weatherURLDb.weather_data_url_id
        weatherForecastObj.weather_url_id= weatherURLDb.weather_data_url_id
        await masterSchema.getRepository(weather_data_current).save(weatherCurrentObj)
        await masterSchema.getRepository(weather_data_forecast).save(weatherForecastObj)
        const mergedData = await slaveSchema.createQueryBuilder()
          .select(["current.weather_location_name,current.weather_location_country,current.weather_location_current,current.weather_location_region,current.weather_location_lat,current.weather_location_lon,current.weather_location_tz_id,current.weather_location_localtime,forecast.weather_forecast_sunrise,forecast.weather_forecast_sunset,forecast.weather_forecast_moonrise,forecast.weather_forecast_moonset,forecast.weather_forecast_moon_phase,forecast.weather_forecast_moon_illumination"])
          .from(weather_data_current, "current")
          .innerJoin(weather_data_forecast, "forecast", "current.weather_url_id = forecast.weather_url_id")
          .where("current.weather_url_id =:urlId", { urlId: weatherURLDb.weather_data_url_id })
          .execute()
        return { message: "Success", status: 200, error: [] ,data:mergedData}
      }else{
        return { message: "Please enter a vaild location to get weather details.", status: 400, error: [] ,data:[]}
        
      }
      
    }else{
      return { message: "Not able to find weather details=3.", status: 400, error: [] ,data:[]}
    }

  }catch(error){
    console.log(error)
    return { message: "error while fetching weather details-1.please try again later.", status: 500, error: error ,data:[]} 
  }
}
