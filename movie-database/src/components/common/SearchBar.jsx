/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import useSearchMovieData from "../../hooks/useSearchMovieData";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const [query, setQuery] = useState("");

  const [isLoading, isError, data] = useSearchMovieData(query); //tracks the search
  const onSubmit = (formData) => {
    const searchTerm = formData.search.trim();
    setQuery(searchTerm);
    if (isLoading) console.log(isLoading);
    if (isError) console.log(isError);
    if (data) console.log(data);
  };

  return (
    <div className="flex flex-col items-center pb-5 pt-5">
      <form  className="w-full flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        {/* INPUT PART */}
        <div className="flex justify-center items-center">
          <input
            {...register("search")}
            className="border-2 shadow-lg hover:shadow-lg rounded-xl w-96 h-10 focus:border-none	focus: outline-none font-mono text-slate-900 border-none mr-2"
            type="search"
            name="search"
            id="search"
          />

          {/* div for the search button */}
          <div className="ml-2 w-auto rounded-lg  hover:bg-purple-300 transotion duration-300 ease-in-out">
            <button
              className=" flex items-center  bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-pruble-600"
              type="submit"
            >
              <FeatherIcon className="w-4 h-4 mr-4" icon="search" />
              <span className="font-mono"> Search </span>
            </button>
          </div>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && (
        <p className="text-purple-700 mt-5 font-mono">Loading ....</p>
      )}

      {/* Error State */}

      {isError && (
        <p className="text-purple-700 mt-5 font-mono">
          Something went wrong! Please try again!{" "}
        </p>
      )}

      {/* Data is fetched */}
      <div className="flex justify-center items-center flex-wrap gap-4 bg-gray-100 p-6 rounded-lg shadow-md mt-5">
      {data?.Search && data.Search.length > 0 ? (   
          data.Search.map((movie) => (
            <div key={movie.imdbID} className="w-64 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
              <img
                className="w-full  object-cover rounded-lg"
                src={movie.Poster}
                alt={movie.Title}
              />
              <h3 className="text-xl text-purple-600 font-bold hover:text-purple-900 transition-colors">
                {movie.Title}
              </h3>
              <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
                Year: {movie.Year}
              </h4>
              <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
                Rating: {movie.imdbRating}
              </h4>
            </div>
          ))
      ) : (
        query && !isLoading && <p>No Results for "{query}"</p>
      )}
      </div>
      </div>
  );
};

export default SearchBar;
