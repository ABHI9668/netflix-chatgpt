import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS)
        const json = await data.json();
        const filterMovieTrailer = json.results.filter(video => video.type === "Trailer")
        
        const trailer = filterMovieTrailer.length ? filterMovieTrailer[0] : json.results[0];

        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}
export default useTrailerVideo;