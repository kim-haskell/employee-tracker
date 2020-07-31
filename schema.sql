DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);
CREATE TABLE role (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    role_id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE CASCADE
);


INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales lead", "90000", 1), ('Salesperson', 80000, 1),('Lead Engineer', 150000, 2), ("Accountant", 85000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Day", 1, null), ("Winston", "Bishop", 1, 1), ("Winston", "Schmidt", 2, 2), ("Nick", "Miller", 3, null);