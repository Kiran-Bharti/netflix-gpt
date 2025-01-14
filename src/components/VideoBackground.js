import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="w-dvw sm:w-screen h-2/4 sm:aspect-video sm:max-h-dvh pt-14 sm:pt-0"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&enablejsapi=1&loop=1&modestbranding=1&iv_load_policy=3&fs=0&showinfo=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground