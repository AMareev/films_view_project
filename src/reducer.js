const initialState = {
    films: {},
};

//todo! Переписать на массив
// const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITIAL_STATE': {
            return {
                ...state,
                films: action.payload,
            };
        }

        case 'SET_RATING': {
            console.log('into reducer');
            return {
                ...state,
                films: {
                    ...state.films,
                    raiting: action.payload,
                },
            };
        }

        default:
            return state;
    }
};
