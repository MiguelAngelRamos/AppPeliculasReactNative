import { useEffect, useState } from "react";
import { Cast, CreditsResponse } from "../interfaces/creditsinterface";
import { MovieFull } from "../interfaces/movieInterface";
import movieDB from "../api/movieDB";

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {

  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
      const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

      // mandar a llamar ambas de forma paralela
      const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

      setstate({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castPromiseResp.data.cast
      })
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getMovieDetails();
  }, [])

  return {
    ...state
  }
  // return {
  //   isLoading: state.isLoading,
  //   movieFull: state.movieFull,
  //   cast: state.cast
  // }
}

