import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const fetchMovieDetails = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        OPTIONS
      );
  
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    };
  
    useEffect(() => {
      fetchMovieDetails();
    }, []);
}

export default useTopRatedMovies