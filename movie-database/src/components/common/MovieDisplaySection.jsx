import MovieDisplay from "../common/MovieDisplay";

const MovieDisplaySection = () => {
  const movieList = [
    "The godfather",
    "John Wick",
    "Mission Impossible",
    "rush hour",
    "venom ",
    "wicked",
    "dune",
    "smile",
    "joker",
    "about last night",
    "the old ones",
    "jurassic park",
    "luca",
    "rapunzel",
    "the meg",
    "se7en",
    "avengers endgame",
    "home alone"
  ].map((title) => title.trim()); // Trim whitespace

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
      <div
        className="flex flex-wrap gap-4"
      >
        {movieList.map((movieTitle) => (
          <MovieDisplay key={movieTitle} movieName={movieTitle} />
        ))}
      </div>
    </div>
  );
};

export default MovieDisplaySection;
