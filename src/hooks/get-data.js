import { instance } from '../http/http-client';

export const GetDataFromServer = () => async (dispatch) => {
    try {
        const { data } = await instance.get('/movies');

        dispatch({
            type: 'SET_INITIAL_STATE',
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
};
