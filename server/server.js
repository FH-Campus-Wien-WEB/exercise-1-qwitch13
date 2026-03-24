const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {

  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      "Title": "Origin",
      "Released": "2024-01-19",
      "Runtime": 141,
      "Genres": ["Drama", "History"],
      "Directors": ["Ava DuVernay"],
      "Writers": ["Ava DuVernay", "Isabel Wilkerson"],
      "Actors": ["Aunjanue Ellis-Taylor", "Jon Bernthal", "Niecy Nash"],
      "Plot": "The unspoken system that has shaped America and chronicles how lives today are defined by a hierarchy of human divisions.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmE5YTBlMDAtZDFjZi00NjQ5LWJkNWUtMzJhMmYzYWQyZDA4XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 75,
      "imdbRating": 7.2
    },
    {
      "Title": "HyperNormalisation",
      "Released": "2016-10-16",
      "Runtime": 166,
      "Genres": ["Documentary"],
      "Directors": ["Adam Curtis"],
      "Writers": ["Adam Curtis"],
      "Actors": ["Adam Curtis", "Donald Trump", "Vladimir Putin"],
      "Plot": "Adam Curtis explains how, at a time of confusing and inexplicable world events, politicians and the people they represent have retreated in to a damaging over-simplified version of what is happening.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzFlMjZlNTUtMWIwZi00NGY3LTljMTctZDk3MDIwZGVhMmQ5XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": null,
      "imdbRating": 8.2,
    },
    {
      "Title": "The Matrix",
      "Released": "1999-03-31",
      "Runtime": 136,
      "Genres": ["Action", "Sci-Fi"],
      "Directors": ["Lana Wachowski", "Lilly Wachowski"],
      "Writers": ["Lilly Wachowski", "Lana Wachowski"],
      "Actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 73,
      "imdbRating": 8.7
    }
  ]

  res.json(movies) // Send the movies data as JSON response
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

