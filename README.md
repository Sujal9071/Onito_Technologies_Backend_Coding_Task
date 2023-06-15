# Onito_Technologies_Backend_Coding_Task<br/>
Link to the Assignment - https://drive.google.com/file/d/1h6qeV1u5Qd8qEveWPYZInI3Kvl8T4w_k/view?usp=sharing<br/>
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
 a.)GET /api/v1/longest-duration-movies
This route returns as JSON the top 10 movies with the longest runTime
The output should contain tconst, primaryTitle, runtimeMinutes & genres <br/>
 ![Screenshot (104)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/e3d516b2-6b1f-4041-8394-b999744e7ae6) <br />
 b.)POST /api/v1/new-movie
This route takes JSON as input for new movie and saves it into the database
On successful save, it returns “success”<br/>
 ![Screenshot (105)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/df81a980-edd5-495a-8bac-245060920c68) <br />
 c.)GET /api/v1/top-rated-movies
This route returns as JSON the movies with an averageRating > 6.0, in sorted
order by averageRating
The output should contain tconst, primaryTitle, genre & averageRating.<br/>
 ![Screenshot (106)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/356d2b4f-24e4-410e-9639-36a0e547bca7) <br />
 d.)GET /api/v1/genre-movies-with-subtotals
Show a list of all movies genre-wise with Subtotals of their numVotes.
The calculation of subtotals should be done in SQL query; not the API code
Output format :<br/>
 ![Screenshot (108)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/acba8ca3-1a4a-4f91-8777-23dd8cf851c7) <br/>
     ![Screenshot (109)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/5fb77636-f208-43e3-ae4e-8b2d87ee8a97) <br />
     ![Screenshot (110)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/bcd07540-2c30-41a3-a36b-820200344146) <br />
  e.)POST /api/v1/update-runtime-minutes
Increment runtimeMinutes of all Movies using only SQL query (not in API code).
Increment runtimeMinutes by :
15 if genre = Documentary
30 if genre = Animation
45 for the rest<br/>
  ![Screenshot (111)](https://github.com/Sujal9071/Onito_Technologies_Backend_Coding_Task/assets/91529937/766cfd13-74d5-4ad2-a3db-0aed3cbab6dd) <br />




