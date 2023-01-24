import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";
  
    
@Entity()
export class weather_data_forecast extends BaseEntity {
  @PrimaryGeneratedColumn()
  weather_forecast_id!: number;

  @Column()
  weather_url_id!: number;
    
  @Column()
  weather_forecast_region!: string;
  
  @Column()
  weather_forecast_country!: string;

  @Column()
  weather_forecast_name!: string;

  @Column()
  weather_forecast_sunrise!: string;

  @Column()
  weather_forecast_sunset!: string;

  @Column()
  weather_forecast_moonrise!: string;

  @Column()
  weather_forecast_moonset!: string;

  @Column()
  weather_forecast_moon_phase!: string;

  @Column()
  weather_forecast_moon_illumination!: string;

  @Column()
  weather_forecast_other_data!: string;


 
  
  @Column()
  weather_forecast_created_at!: Date;
    
    
}