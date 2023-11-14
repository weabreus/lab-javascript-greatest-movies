// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    return Math.round(moviesArray.reduce((acc, movie) => typeof movie.score === "number" ? acc + movie.score : acc, 0) / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.filter((movie) => movie.genre.includes('Drama')).length === 0 ) return 0

    return scoresAverage(moviesArray.filter((movie) => movie.genre.includes('Drama')));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if(a.year === b.year) {
            if(a.title < b.title) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return a.year - b.year;
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedArr = [...moviesArray].sort((a, b) => a.title.localeCompare(b.title)).map((movie) => movie.title);

    return sortedArr.length > 20 ? sortedArr.slice(0, 20) : sortedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    console.log(moviesArray);
    return moviesArray.map((movie) => ({...movie, duration: movie.duration.split(" ").reduce((acc, val) => {
        return val.includes('h') ? Number(val[0]) * 60 + acc : Number(val.slice(0, 2)) + acc} , 0)}))
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null
    let yearlyMovies = {};

    moviesArray.forEach(movie => {
        if (!Object.hasOwn(yearlyMovies, movie.year)) yearlyMovies[movie.year] = [];

        yearlyMovies[movie.year].push(movie);
    });


    let avgArr = [];

    Object.keys(yearlyMovies).forEach((year) => avgArr.push(scoresAverage(yearlyMovies[year])))

  
    return `The best year was ${Object.keys(yearlyMovies)[avgArr.indexOf(Math.max(...avgArr))]} with an average score of ${Math.max(...avgArr)}`

}

