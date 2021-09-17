#create database ecommerce;
use ecommerce;
create table `user`(
id int not null Auto_increment,
fname varchar(30) ,
lname varchar(30),
mobile varchar(20),
email varchar(100) not null,
pward varchar(20) not null,
PRIMARY KEY (id),
  UNIQUE  (mobile),
  UNIQUE (email)
);
create table address(
address_id int not null auto_increment,
id int,
fname varchar(30),
lname varchar(30),
doorno varchar(30),
address varchar(100),
landmark varchar(100),
city varchar(50) not null,
country varchar(50) not null,
state varchar(50) not null,
phone varchar(30) not null,
pincode varchar(10) not null,
primary key(address_id),
FOREIGN KEY (id) REFERENCES `user`(id)
);
create table product(
product_id int not null auto_increment,
name varchar(1000) not null,
mrp float not null,
discount float not null,
avail int not null,
descript varchar(5000) not null,
primary key(product_id)
);
 create table `order` (
 order_id int not null auto_increment,
 id int not null,
 product_id int not null,
 address_id int not null,
 order_time time,
 order_date date,
 payment_mode varchar(50),
 order_status varchar(30),
 qty int not null,
 price float not null,
 primary key(order_id),
 foreign key (id) references `user`(id),
 foreign key (product_id) references product(product_id),
 foreign key (address_id) references `address`(address_id)
);