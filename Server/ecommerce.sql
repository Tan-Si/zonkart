drop database ecommerce;
create database ecommerce;
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

 create table mobile(
   mid int not null auto_increment,
   product_id int not null,
   model_name varchar(100),
   brand varchar(100),
   `memory` varchar(100),
   `storage` varchar(100),
   camera varchar(5000),
   chip varchar(5000),
   display varchar(5000),
   sim varchar(100),
   color varchar(100),
   os varchar(100),
   battery varchar(100),
   weights varchar(100),
   primary key(mid),
   foreign key(product_id) references product(product_id)
 );
 create table laptop(
   lapid int not null auto_increment,
   product_id int not null,
   color varchar(30),
   height int not null,
   widht int not null,
   weights int not null,
   display varchar(1000),
   processor varchar(1000),
   brand varchar(100),
   ram varchar(100) not null,
   graphic varchar(100),
   storage varchar(100),
   os varchar(30),
   battery varchar(100),
   manufacture varchar(100),
   primary key(lapid),
   foreign key (product_id) references product(product_id)
    );
    create table category(
      categoryid int not null auto_increment,
      categoryname varchar(100) not null,
      primary key(categoryid)
    );
    create table audio(
      audioid int not null,
      categoryid int not null,
      product_id int not null,
      color varchar(30),
      `power` varchar(10),
      battery varchar(30),
      frequence varchar(30),
      bluetooth varchar(30),
      water_proof varchar(30),
      primary key (audioid),
      foreign key (product_id) references product(product_id),
      foreign key (categoryid) references category(categoryid)
    );
    create table accessors(
      accessorsid int not null auto_increment,
      categoryid int not null,
      product_id int not null,
      primary key(accessorsid),
      foreign key (product_id) references product(product_id),
      foreign key (categoryid) references category(categoryid)
    );
 create table picture(
imgid int not null auto_increment,
product_id int not null,
primary key(imgid),
foreign key (product_id) references product(product_id)
 );