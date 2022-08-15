export const selectMovie = (movie) => {
    return {
      type: "MOVIE",
      payload: movie,
    };
  };