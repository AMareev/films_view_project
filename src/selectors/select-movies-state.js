export const selectMoviesState = (state) => {
    console.log('into select - state: ', state);
    console.log('into select - state.movies: ', state.movies);

    return state.movies;
};
