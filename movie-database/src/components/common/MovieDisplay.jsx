/* eslint-disable react/prop-types */
import useMovieData from "../../hooks/useMovieData";

const MovieDisplay = (props) => {
  const { movieName } = props;
  const [isLoading, isError, movieData] = useMovieData(movieName);

  if (isLoading) return <p>Please be Patient while we fetch the Data</p>;
  if (isError) return <p>Something went wrong</p>;

  return movieData ? (
    <div /* movie card */
      className="bg-purple-50 p-6 rounded-lg mx-auto mt-8 font-mono flex flex-col items-center justify-center"
    >
      <img
        className="rounded-lg h-auto shadow-md mb-4"
        src={movieData.Poster}
        alt={movieData.Title}
      />
      <h3 className="text-xl text-purple-600 font-bold hover:text-purple-900 transition-colors">
        {movieData.Title}
      </h3>{" "}
      {/* title */}
      <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
        Year: {movieData.Year}
      </h4>{" "}
      {/* year */}
      <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
         Rating: {movieData.imdbRating}
      </h4>{" "}
      {/* Rating */}
    </div>
  ) : (
    <p>getting your data</p>
  );
};

export default MovieDisplay;
