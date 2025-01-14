import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchMovieDetails = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      OPTIONS
    );

    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);
};

export default usePopularMovies;
