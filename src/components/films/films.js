import { useSelector } from 'react-redux';
import { selectMoviesState } from '../../selectors/';
import { FilmControl } from './film-control';

export const Films = () => {
    const movies = useSelector(selectMoviesState);
    console.log('movies', movies);
    // const movies = selectMoviesState;

    return (
        <div className='flex flex-row'>
            {movies?.map(({ id, title, rating }, index) => {
                return (
                    <div>
                        <div key={id} id={id}>
                            <div>title: {title}</div>
                            <div>description: {title}</div>
                            <div>rating: {rating}</div>
                            <FilmControl filmIndex={index}>
                                {rating}
                            </FilmControl>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
