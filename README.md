# Onito_Technologies_Backend_Coding_Task
Backend Coding Task 
1. Create SQL Tables `movies` & `ratings`, and populate the CSV data into them.
To set up the MySQL database in my local machine, I created a database named 'sujal' and created two tables: movies and ratings. Here are the queries for creating the tables:
Query for creating the movies table:
CREATE TABLE movies (
  tconst VARCHAR(255) PRIMARY KEY,
  titleType VARCHAR(25),
  primaryTitle VARCHAR(255),
  runtimeMinutes INT,
  genres VARCHAR(255)
);
Query for creating the ratings table:
CREATE TABLE ratings (
  tconst VARCHAR(255),
  averageRating DECIMAL(3, 1),
  numVotes INT,
  PRIMARY KEY (tconst),
  FOREIGN KEY (tconst) REFERENCES movies(tconst)
);
To populate the tables with CSV data, I ran the following queries in the MySQL 8.0 Command Line Client:
Query for populating the movies table:
LOAD DATA LOCAL INFILE 'F:/movies.csv' INTO TABLE movies FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
Query for populating the ratings table:
LOAD DATA LOCAL INFILE 'F:/ratings.csv' INTO TABLE ratings FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
With these queries, I successfully populated the tables with the respective CSV data.

Now, the first task is completed, and the database is ready for further operations.
2.Create an HTTP server with the following routes
  Built HTTP server code with routes to interact with a MySQL database by using Node.js, Express.js, and MySQL.
