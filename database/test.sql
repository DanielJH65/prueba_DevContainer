CREATE DATABASE db_users
GO

USE db_users

CREATE TABLE [User] (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    mail VARCHAR(254) NOT NULL,
    username VARCHAR(100) NOT NULL,
    creation_date DATETIME2 NOT NULL
)
GO