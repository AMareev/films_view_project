const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_STATE': {
            // return action.payload;

            return { movies: action.payload };
        }

        case 'SET_RATING': {
            return {
                ...state,
                movies: state.movies.map((movie, index) => {
                    if (Number(index) === Number(action.filmIndex)) {
                        return {
                            ...movie,
                            rating: action.payload,
                        };
                    }
                    return movie;
                }),
            };
        }

        default:
            return state;
    }
};
