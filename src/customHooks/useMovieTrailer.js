import { useEffect } from "react";
import { VIDEOS_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      VIDEOS_OPTIONS
    );

    const json = await response.json();
    // console.log(json);

    const trailers = json.results.filter((video) => video.type === "Trailer");
    const movieVideo = trailers.length ? trailers[0] : json.results[0];
    // console.log(movieVideo);
    dispatch(addTrailerVideo(movieVideo));
    // console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
