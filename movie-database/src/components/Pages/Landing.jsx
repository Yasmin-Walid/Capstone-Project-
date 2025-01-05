import { useState } from 'react';
import useMovieData from '../../hooks/useMovieData'


 const Landing = () => {
    
  const [movieTitle, setMovieTitle] = useState ("blade runner 2049");
  const [isLoading, isError, movieData] = useMovieData(movieTitle);
    

    if (isLoading) 
      return (
        <p>Please be Patient while we fetch the Data</p>
      )
    if (isError) 
      return (
        <p>Something went wrong</p>

      )

  return movieData ? (
    <div>

      <img src= {movieData.Poster} alt= {movieData.Title}/>
      <h3>Movie Name: {movieData.Title}</h3> {/* title */}
      <h4>Year: {movieData.Year}</h4> {/* year */}
      <h4>imdb Rating: {movieData.imdbRating}</h4> {/* Rating */}

    </div>
  ) : (

    <p>getting your data</p>
  )
};

export default Landing;