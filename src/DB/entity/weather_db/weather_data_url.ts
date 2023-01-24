import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

  
@Entity()
export class weather_data_url extends BaseEntity {
  @PrimaryGeneratedColumn()
  weather_data_url_id!: number;
  
  @Column()
  weather_data_current_url!: string;

  @Column()
  weather_data_forecast_url!: string;

  @Column()
  weather_data_url_type!: string;

  @Column()
  weather_data_url_name!: string;

  @Column()
  weather_data_status!: number;

  @Column()
  weather_data_created_at!: Date;
  
  
}