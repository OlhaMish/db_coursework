# SQL-скрипти

У цьому сервісі для взаємодії з базою даних та управління схемою бази даних використовується SQLAlchemy.

CREATE TABLE `users` (
	`name` varchar(255) NOT NULL UNIQUE,
	`password_hash` varchar(255) NOT NULL,
	PRIMARY KEY (`name`)
);

CREATE TABLE `dataset_categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `datasets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`category_id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` TEXT NOT NULL,
	`author_name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `files` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`path` varchar(255) NOT NULL,
	`dataset_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `datasets` ADD CONSTRAINT `datasets_fk0` FOREIGN KEY (`category_id`) REFERENCES `dataset_categories`(`id`);

ALTER TABLE `datasets` ADD CONSTRAINT `datasets_fk1` FOREIGN KEY (`author_name`) REFERENCES `users`(`name`);

ALTER TABLE `files` ADD CONSTRAINT `files_fk0` FOREIGN KEY (`dataset_id`) REFERENCES `datasets`(`id`);
