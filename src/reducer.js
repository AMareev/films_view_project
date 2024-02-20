const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_STATE': {
            console.log('otvet', action.payload);
            return action.payload;
        }

        case 'SET_RATING': {
            console.log('into reducer');
            return {
                ...state,
                films: {
                    ...state.films,
                    rating: action.payload,
                },
            };
        }

        default:
            return state;
    }
};
