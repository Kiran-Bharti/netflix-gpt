import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchMovieDetails = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
  
      const data = await response.json();
      console.log(data);
      dispatch(addNowPlayingMovies(data.results));
    }
  
    useEffect(() => {
      fetchMovieDetails();
    }, [])
}

export default useNowPlayingMovies