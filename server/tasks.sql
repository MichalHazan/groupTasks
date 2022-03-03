create database tasksdb;

use tasksdb;

CREATE table customers
(
id int auto_increment,
name varchar(255) not null,
job varchar(255) not null,
phone varchar(15) not null,
mail varchar(255) not null,
primary key(id)
);

CREATE table tasks
(
id int auto_increment,
task text,
date timestamp default now(),
customer_id int,
complited bool default 0,
primary key (id),
foreign key (customer_id) references customers(id)
);

INSERT INTO customers
(name, job, phone, mail)
VALUES
("Eden", "Fronend", "055-123-4598", "Eden@gmail.com"),
("Michal", "Backend", "055-677-4598", "Michal@gmail.com"),
("Gili", "Backoffice", "055-909-4598", "Gili@gmail.com"),
("Sharon", "Bookkeeper", "055-000-4598", "Sharon@gmail.com"),
("Meir", "Shef", "052-888-888", "Meir@gmail.com");

INSERT INTO tasks
(task, customer_id)
VALUES
("Send fax to Meir", 3),
("Call to Nadav", 2),
("Prepar a deal file", 1);



SELECT tasks.* , customers.name
    FROM customers
    INNER JOIN tasks
    ON tasks.customer_id = customers.id;