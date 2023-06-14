const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sujal2023',
  database: 'sujal',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// GET /api/v1/longest-duration-movies
app.get('/api/v1/longest-duration-movies', (req, res) => {
  const query = `
    SELECT tconst, primaryTitle, runtimeMinutes, genres
    FROM movies
    ORDER BY runtimeMinutes DESC
    LIMIT 10
  `;
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// POST /api/v1/new-movie
// app.use(bodyParser.json());

app.post('/api/v1/new-movie', (req, res) => {
  const { tconst, titleType, primaryTitle, runtimeMinutes, genres } = req.body;

  // Insert the new movie into the database
  const query = 'INSERT INTO movies (tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [tconst, titleType, primaryTitle, runtimeMinutes, genres], (err, result) => {
    if (err) {
      console.error('Error saving the new movie: ', err);
      res.status(500).json({ message: 'Failed to save the movie.' });
      return;
    }
    console.log('New movie saved to the database!');
    res.json({ message: 'success' });
  });
});

// GET /api/v1/top-rated-movies
app.get('/api/v1/top-rated-movies', (req, res) => {
  const query = `
  SELECT movies.tconst, movies.primaryTitle, movies.genres, ratings.averageRating
  FROM movies
  JOIN ratings ON movies.tconst = ratings.tconst
  WHERE ratings.averageRating > 6.0
  ORDER BY ratings.averageRating DESC;
  
  `;
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// GET /api/v1/genre-movies-with-subtotals
app.get('/api/v1/genre-movies-with-subtotals', (req, res) => {
  const query = `
  SELECT movies.genres, movies.primaryTitle, SUM(ratings.numVotes) AS totalVotes
  FROM movies
  JOIN ratings ON movies.tconst = ratings.tconst
  GROUP BY movies.genres, movies.primaryTitle
  WITH ROLLUP;
  
  `;
  db.query(query, (error, results) => {
    if (error) {
      // Handle error
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Format the results into a table
      let output = 'Genre\tprimaryTitle\tnumVotes\n';
      for (const row of results) {
        output += `${row.genres || 'TOTAL'}\t${row.primaryTitle || '---'}\t${row.totalVotes || '---'}\n`;
      }

      // Set the response headers and send the table as the response
      res.setHeader('Content-Type', 'text/plain');
      res.send(output);
    }
  });
});

// POST /api/v1/update-runtime-minutes
app.post('/api/v1/update-runtime-minutes', (req, res) => {
  // Update the runtimeMinutes based on genre
  const query = `UPDATE movies
                 SET runtimeMinutes = CASE
                     WHEN genres = 'Documentary' THEN runtimeMinutes + 15
                     WHEN genres = 'Animation' THEN runtimeMinutes + 30
                     ELSE runtimeMinutes + 45
                 END`;
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error updating the runtimeMinutes: ', err);
      res.status(500).json({ message: 'Failed to update the runtimeMinutes.' });
      return;
    }
    console.log('Runtime minutes updated successfully!');
    res.json({ message: 'success' });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
