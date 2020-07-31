DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE department (
	id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
	id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT
);

INSERT INTO employees (first_name, last_name)
VALUES ("Jane", "Smith");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO role (title, salary)
VALUES ("Sales lead", "90000");