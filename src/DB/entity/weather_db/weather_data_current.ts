import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";
    
      
@Entity()
export class weather_data_current extends BaseEntity {
  @PrimaryGeneratedColumn()
  weather_id!: number;
      
  @Column()
  weather_location_name!: string;
    
  @Column()
  weather_location_country!: string;
  
  @Column()
  weather_location_current!: string;
  
  @Column()
  weather_location_region!: string;
  
  @Column()
  weather_location_lat!: string;
  
  @Column()
  weather_location_lon!: string;
  
  @Column()
  weather_location_tz_id!: string;
  
  @Column()
  weather_location_localtime!: string;
  
  @Column()
  weather_location_other_data!: string;
  
   
    
  @Column()
  weather_location_status!: number;
  
  @Column()
  weather_url_id!: number;
    
  @Column()
  weather_location_created_at!: Date;
      
      
}