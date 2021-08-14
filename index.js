/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */

function getAllMovieTitles(exampleMovies) {

  let movieNameArr = []

  if (!exampleMovies.length) {
    return []
  }

  for (let i = 0; i < exampleMovies.length; i++) {
    movieName = exampleMovies[i].title;
    movieNameArr.push(movieName)
  }
  return movieNameArr
}





/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(exampleMovies) {
  //meta score is 0
  //We will be searching through an for index to return as nested
  let scoresOfMovie = exampleMovies[0];
  //if no array inputed return zero
  if (!scoresOfMovie) {
    return 0;
  }
  //loop along movie array - movie grants us access to index
  for (let movie of exampleMovies) {
    //if the metascore of current movie is greater than heighest meta
    
    if (movie.metascore > scoresOfMovie.metascore) {
      // 'metaScore' was here. Be conscious of syntax!!!!
      //the meta becomes heighest score
      scoresOfMovie = movie
    }
  }
  // use number to return as a number vs a string https://www.w3schools.com/js/js_number_methods.asp
  return Number(scoresOfMovie.metascore)
  //'metaScore again!!! watch synax!!
}

console.log(getHighestMetascore(exampleMovies))

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(exampleMovies) {


  if (exampleMovies.length === 0) {
    return 0
  }



  imdbRatingArr = []

  for (let i = 0; i < exampleMovies.length; i++) {
    currentMovie = exampleMovies[i].imdbRating
    imdbRatingArr.push(currentMovie)
    //Right now the numbers are appearing as strings. Use map to convert them to integers.
    imdbRatingArr = imdbRatingArr.map(Number)
    //now they are integers and can be added!!
  }

  //to get the average we first have to TOTAL the numbers in the imdb array and then divide by the indexes in imdb array

  let ratingTotaler = 0;
  let averagingArr = []
  //imcrement along the array used to get the 
  for (let i = 0; i < imdbRatingArr.length; i++) {
    ratingTotaler += imdbRatingArr[i];
    averagingArr.push(imdbRatingArr[i])
  }

  return ratingTotaler / averagingArr.length

}



/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(exampleMovies) {

if(exampleMovies === false) {
  return {}
}

  
let movieRating = {}
 

  for (let i = 0; i < exampleMovies.length; i++) {
    movieRating = exampleMovies[i].rated
    if (movieRating === exampleMovies[i].rated) {
      ratingCounter++
    }
  }
  return ratingCounter
}



/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(exampleMovies, id) {

//loop along the movie object
  for (let movie of exampleMovies) {
 //no need to define what the id is - i'm just returning the movie!!   
    if (movie.imdbID === id) {
      return movie
    }
  }
  //null for all other case
  return null
}




/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(exampleMovies, genre) {
//guard clauses
  if (!exampleMovies) {
    return []
  }
//create array to accomulate our mathcing movies
  let matchingMovies = []
//loop along example movies
  for (let movie of exampleMovies) {
    //if the genre of the object inludes genre inputted
    if (movie.genre.includes(genre)) {
      //push into our new array
      matchingMovies.push(movie)
    }
    return matchingMovies
  }

}

console.log(filterByGenre(exampleMovies, 'comedy'))


/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear() { }

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() { }

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
