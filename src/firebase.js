import axios from 'axios';

export const filmsRef = axios.create({
    //переписать. убрать films
    baseURL:
        'https://filmslistproject-default-rtdb.europe-west1.firebasedatabase.app/films/',
});
