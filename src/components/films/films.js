import { useSelector } from 'react-redux';
import { selectMoviesState } from '../../selectors/';
import { FilmControl } from './film-control';

export const Films = () => {
    const movies = useSelector(selectMoviesState);

    console.log('movieliset', movies);

    return (
        <div className='flex flex-row'>
            {movies.map(({ id, title, rating }) => {
                console.log('inside map', id);

                return (
                    <div>
                        <div key={id} id={id}>
                            <div>title: {title}</div>
                            <div>description: {title}</div>
                            <div>rating: {rating}</div>
                            <FilmControl>{rating}</FilmControl>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
