-- Database: `electricity_bill`

CREATE DATABASE IF NOT EXISTS `electricity_bill`;
USE `electricity_bill`;

-- Table structure for table `bills`

CREATE TABLE IF NOT EXISTS `bills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `consumer_type` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `units` int(11) NOT NULL,
  `bill_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
