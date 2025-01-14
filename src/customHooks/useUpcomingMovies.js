import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const fetchMovieDetails = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        OPTIONS
      );
  
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    };
  
    useEffect(() => {
      fetchMovieDetails();
    }, []);
}

export default useUpcomingMovies