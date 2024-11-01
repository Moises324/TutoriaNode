CREATE DATABASE gestion_libros;
\c gestion_libros;

CREATE TABLE books (id SERIAL, title VARCHAR(50) NOT NULL, book_description VARCHAR(250) NOT NULL, author VARCHAR(250) NOT NULL);

INSERT INTO books(title, book_description, author) values
('Libro1', 'Descripción libro 1', 'Autor libro 1'),
('Libro2', 'Descripción libro 2', 'Autor libro 2'),
('Libro3', 'Descripción libro 3', 'Autor libro 3')

CREATE TABLE users (id SERIAL, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL);

INSERT INTO users(email, password) values
('admin@books.com', '123456'),
('manager@books.com', 'abcdefg');

SELECT * FROM books;
SELECT * FROM users;


-- DROP TABLE eventos;