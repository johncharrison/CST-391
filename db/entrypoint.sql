-- Adminer 4.8.1 MySQL 8.2.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `level` smallint unsigned NOT NULL,
  `level_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `priority` (`id`, `level`, `level_name`) VALUES
(1,	1,	'Critical'),
(2,	2,	'High'),
(3,	3,	'Medium'),
(4,	4,	'Low');

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `url_location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `created_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `modified_date` datetime NOT NULL,
  `status_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `project` (`id`, `title`, `description`, `url_location`, `start_date`, `due_date`, `created_date`, `modified_date`, `status_id`) VALUES
(1,	'Project 1',	'Something goes here',	'http://127.0.0.1:3000/',	NULL,	NULL,	'2023-10-30 15:41:54',	'2023-10-30 15:41:54',	1);

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `status` (`id`, `title`) VALUES
(1,	'Not Started'),
(2,	'In Progress'),
(3,	'Complete'),
(4,	'Stop Working');

DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL DEFAULT '#FFFFFF',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `tag` (`id`, `title`, `color`) VALUES
(1,	'Tag 1',	'#BC55FA'),
(2,	'Tag 2',	'#000000');

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `due_date` date DEFAULT NULL,
  `created_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `modified_date` datetime NOT NULL,
  `status_id` int unsigned DEFAULT NULL,
  `priority_id` int unsigned DEFAULT NULL,
  `project_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `status_id` (`status_id`),
  KEY `priority_id` (`priority_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `task_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE SET NULL,
  CONSTRAINT `task_ibfk_3` FOREIGN KEY (`priority_id`) REFERENCES `priority` (`id`) ON DELETE SET NULL,
  CONSTRAINT `task_ibfk_4` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `task` (`id`, `title`, `description`, `due_date`, `created_date`, `modified_date`, `status_id`, `priority_id`, `project_id`) VALUES
(2,	'Task 1',	'Some task description',	'2023-10-30',	'2023-10-30 17:54:40',	'2023-10-30 17:54:40',	2,	2,	1);

DROP TABLE IF EXISTS `task_tag`;
CREATE TABLE `task_tag` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint unsigned DEFAULT NULL,
  `tag_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `task_id` (`task_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `task_tag_ibfk_3` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `task_tag_ibfk_5` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2023-10-30 18:30:52
