-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2023 at 05:44 AM
-- Server version: 5.7.32
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weather_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather_data_current`
--

CREATE TABLE `weather_data_current` (
  `weather_location_name` varchar(255) DEFAULT NULL,
  `weather_id` int(11) NOT NULL,
  `weather_location_country` varchar(255) DEFAULT NULL,
  `weather_location_current` varchar(255) DEFAULT NULL,
  `weather_location_region` varchar(255) DEFAULT NULL,
  `weather_location_lat` varchar(255) DEFAULT NULL,
  `weather_location_lon` varchar(255) DEFAULT NULL,
  `weather_location_tz_id` varchar(255) DEFAULT NULL,
  `weather_location_localtime` varchar(255) DEFAULT NULL,
  `weather_location_other_data` longtext,
  `weather_location_status` int(11) DEFAULT NULL,
  `weather_url_id` int(11) DEFAULT NULL,
  `weather_location_created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `weather_data_forecast`
--

CREATE TABLE `weather_data_forecast` (
  `weather_forecast_id` int(11) NOT NULL,
  `weather_url_id` int(11) DEFAULT NULL,
  `weather_forecast_region` varchar(255) DEFAULT NULL,
  `weather_forecast_country` varchar(255) DEFAULT NULL,
  `weather_forecast_name` varchar(255) DEFAULT NULL,
  `weather_forecast_sunrise` varchar(255) DEFAULT NULL,
  `weather_forecast_sunset` varchar(255) DEFAULT NULL,
  `weather_forecast_moonrise` varchar(255) DEFAULT NULL,
  `weather_forecast_moonset` varchar(255) DEFAULT NULL,
  `weather_forecast_moon_phase` varchar(255) DEFAULT NULL,
  `weather_forecast_moon_illumination` varchar(255) DEFAULT NULL,
  `weather_forecast_other_data` longtext,
  `weather_forecast_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `weather_data_url`
--

CREATE TABLE `weather_data_url` (
  `weather_data_current_url` varchar(255) DEFAULT NULL,
  `weather_data_forecast_url` varchar(255) DEFAULT NULL,
  `weather_data_url_id` int(11) NOT NULL,
  `weather_data_url_name` varchar(255) DEFAULT NULL,
  `weather_data_url_type` varchar(255) DEFAULT NULL,
  `weather_data_status` int(11) DEFAULT NULL,
  `weather_data_created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weather_data_current`
--
ALTER TABLE `weather_data_current`
  ADD PRIMARY KEY (`weather_id`);

--
-- Indexes for table `weather_data_forecast`
--
ALTER TABLE `weather_data_forecast`
  ADD PRIMARY KEY (`weather_forecast_id`);

--
-- Indexes for table `weather_data_url`
--
ALTER TABLE `weather_data_url`
  ADD PRIMARY KEY (`weather_data_url_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weather_data_current`
--
ALTER TABLE `weather_data_current`
  MODIFY `weather_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `weather_data_forecast`
--
ALTER TABLE `weather_data_forecast`
  MODIFY `weather_forecast_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `weather_data_url`
--
ALTER TABLE `weather_data_url`
  MODIFY `weather_data_url_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
