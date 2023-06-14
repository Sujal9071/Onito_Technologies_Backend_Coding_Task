# Onito_Technologies_Backend_Coding_Task
Backend Coding Task <br />
1. Create SQL Tables `movies` & `ratings`, and populate the CSV data into them.<br />
To set up the MySQL database in my local machine, I created a database named 'sujal' and created two tables: movies and ratings. Here are the queries for creating the tables:<br />
Query for creating the movies table:<br />
CREATE TABLE movies (<br />
  tconst VARCHAR(255) PRIMARY KEY,<br />
  titleType VARCHAR(25),<br />
  primaryTitle VARCHAR(255),<br />
  runtimeMinutes INT,<br />
  genres VARCHAR(255)<br />
);<br />
Query for creating the ratings table:<br />
CREATE TABLE ratings (<br />
  tconst VARCHAR(255),<br />
  averageRating DECIMAL(3, 1),<br />
  numVotes INT,<br />
  PRIMARY KEY (tconst),<br />
  FOREIGN KEY (tconst) REFERENCES movies(tconst)
);<br />
To populate the tables with CSV data, I ran the following queries in the MySQL 8.0 Command Line Client:<br />
Query for populating the movies table:<br />
LOAD DATA LOCAL INFILE 'F:/movies.csv' INTO TABLE movies FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;<br />
Query for populating the ratings table:<br />
LOAD DATA LOCAL INFILE 'F:/ratings.csv' INTO TABLE ratings FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS;<br />
With these queries, I successfully populated the tables with the respective CSV data.<br />

Now, the first task is completed, and the database is ready for further operations.<br />
2.Create an HTTP server with the following routes<br />
  Built HTTP server code with routes to interact with a MySQL database by using Node.js, Express.js, and MySQL.<br />
