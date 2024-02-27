import { instance } from '../http/http-client';

export const putDataToServer = (event) => async (dispatch, getState) => {
    const filmIndex = event.currentTarget.dataset.filmIndex;
    const rating = event.currentTarget.id;
    try {
        const movieToUpdate = getState().movies[Number(filmIndex)];
        const updatedMovie = { ...movieToUpdate, rating };
        await instance.put(`/movies/${updatedMovie.id}`, updatedMovie);
        dispatch({
            type: 'SET_RATING',
            filmIndex,
            payload: rating,
        });
    } catch (error) {
        console.error(error);
    }
};
