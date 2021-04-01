DROP DATABASE IF EXISTS Trybeer;
CREATE DATABASE IF NOT EXISTS Trybeer;

USE Trybeer;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `email_un` (email)
);

CREATE TABLE IF NOT EXISTS sales (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_price DECIMAL(9,2) NOT NULL,
	delivery_address VARCHAR(100) NOT NULL,
	delivery_number VARCHAR(50) NOT NULL,
	sale_date DATETIME NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    url_image VARCHAR(200) NOT NULL DEFAULT '',
    PRIMARY KEY(id),
    UNIQUE KEY `name` (name)
);

CREATE TABLE IF NOT EXISTS sales_products (
    sale_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity VARCHAR(10) NOT NULL,
    PRIMARY KEY(sale_id, product_id),
    FOREIGN KEY(sale_id) REFERENCES sales(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

INSERT INTO users (id, name, email, password, role) VALUES
    ('1', 'Tryber Admin', 'tryber@trybe.com.br', '123456', 'administrator'),
    ('2', 'testuser', 'user@test.com', 'test123', 'client');

INSERT INTO products (id, name, price, url_image) VALUES
	('1','Skol Lata 250ml',2.20, 'http://localhost:3001/images/Skol Lata 350ml.jpg'),
	('2','Heineken 600ml',7.50, 'http://localhost:3001/images/Heineken 600ml.jpg'),
	('3','Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg'),
	('4','Brahma 600ml',7.50, 'http://localhost:3001/images/Brahma 600ml.jpg'),
	('5','Skol 269ml',2.19, 'http://localhost:3001/images/Skol 269ml.jpg'),
	('6','Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/Skol Beats Senses 313ml.jpg'),
	('7','Becks 330ml',4.99, 'http://localhost:3001/images/Becks 330ml.jpg'),
	('8','Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/Brahma Duplo Malte 350ml.jpg'),
	('9','Becks 600ml',8.89, 'http://localhost:3001/images/Becks 600ml.jpg'),
	('10','Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/Skol Beats Senses 269ml.jpg'),
	('11','Stella Artois 275ml',3.49, 'http://localhost:3001/images/Stella Artois 275ml.jpg');
