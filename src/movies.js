// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(arrayMovies) {
    
  const newArray = arrayMovies.map((cadaElemento, index, arrayCompleto)=>{
  return cadaElemento.director;});
  //   diretores.push(cadaElemento.director);
  //   return diretores;
  //   console.log(newArray);
  // });
  return newArray
}
// const resultado = getAllDirectors(movies);
// console.log(resultado);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayMovies) {
  let stevenDramaMovies = arrayMovies.filter((movie)=> movie.director==='Steven Spielberg' && movie.genre.includes('Drama'));
  return stevenDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  if(arrayMovies.length === 0){
    return 0;
  }
  
  let score = arrayMovies.reduce((sumScore,movie)=> {
    if (movie.score){
      return sumScore + movie.score
    }else{
      return sumScore;
    }
  },0);
  let scoreAverage = Math.round(score/arrayMovies.length*100)/100;
  return scoreAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayMovies) {
  if(arrayMovies.length === 0 ){
    return 0;
  }
  
  const arrayDrama = arrayMovies.filter((movie)=>movie.genre.includes('Drama'));
  const scoreAveragDrama = scoresAverage(arrayDrama);
  return scoreAveragDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {
  if(arrayMovies.length === 0){
    return null;
  }
  
  let orderArray = arrayMovies;
  orderArray.sort((a,b)=>{
    if(a.year > b.year){
      return 1;
    }else if(a.year < b.year){ 
      return -1;
    }else if(a.title > b.title){
      return 1;
    }else if(a.title < b.title){
      return -1;
    }
  });
  return orderArray; 
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  if(arrayMovies.length===0){
    return null;
  } 
  
  const sortAlpha = arrayMovies;
  let titleArray = sortAlpha.map((movie)=>movie.title);
  
  titleArray.sort((a,b)=>{
    if(a > b){
      return 1;
    }else if(a< b){
      return -1;
    }
  });

  let titleArray20 = titleArray.filter((movie,index)=> index<20);
  
  return titleArray20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayMovies) {
 
  const auxiliar = JSON.parse(JSON.stringify(arrayMovies));

  auxiliar.forEach((element,index) => {
    if(element.duration.length === 8){
      auxiliar[index].duration = Number(element.duration[0])*60 + Number(element.duration[3]+element.duration[4]);
    }else if(element.duration.length === 7){
      auxiliar[index].duration = Number(element.duration[0])*60 + Number(element.duration[3]);
    }else if(element.duration.length === 2){
      auxiliar[index].duration = Number(element.duration[0])*60;
    }else if(element.duration.length === 4){
      auxiliar[index].duration = Number(element.duration[0]);
    }else if(element.duration.length=== 5){
      auxiliar[index].duration = Number(element.duration[0]+element.duration[1]);
    }

    
  });
  // const arrayMoviesMinute = arrayMovies.map((movies)=>{
  //   console.log(typeof(movies.duration));
  //   if(movies.duration.lenght===8){
  //     const minutes = Number(movies.duration[0])*60 + Number(movies.duration[3]+movies.duration[4]);
  //     console.log(movies.duration[3]+movies.duration[4]);
  //     movies.duration = minutes;
  //   }else if(movies.duration.lenght === 7){
  //     const minutes = Number(movies.duration[0])*60 + Number(movies.duration[3]);
  //     movies.duration = minutes;
  //   }else if(movies.duration.lenght === 2){
  //     const minutes = Number(movies.duration[0])*60;
  //     movies.duration = minutes;
  //   }else if(movies.duration.lenght === 4){
  //     const minutes = Number(movies.duration[0]);
  //     movies.duration = minutes;
  //   }else if(movies.duration.lenght === 5){
  //     const minutes = Number(movies.duration[0]+movies.duration[1]);
  //     movies.duration = minutes;
  //   }
  //   return movies;  
  // });

  return auxiliar;

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrayMovies) {
  if(arrayMovies.length === 0){
    return null;
  }
  
  const years = arrayMovies.map((year)=>{
    return year.year;
  })

  const uniqueYear = []
  
  for (let i=0; i<years.length; i++){
    uniqueYear.includes(years[i])? null : uniqueYear.push(years[i]);
  }
  
  let highscore = arrayMovies[0].score;
  let yearHighScore = uniqueYear[0];

  for( let j=0; j<uniqueYear.length;j++){
    const score = arrayMovies.filter((years)=>{
      return years.year === uniqueYear[j];
    });
    
    const soma = score.reduce((a,b)=>a+b.score,0)/score.length;

    if(soma > highscore){
      highscore = soma
      yearHighScore = uniqueYear[j];
    }else if(soma === highscore && j < yearHighScore){
      highscore = soma
      yearHighScore = uniqueYear[j];
    }else{
      highscore = highscore;
      yearHighScore = yearHighScore;
    } 
      
}

return `The best year was ${yearHighScore} with an average score of ${highscore}`

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

