import { useSelector } from 'react-redux';
import {
    selectPosterUrl,
    selelectTitle,
    selectRaiting,
} from '../../selectors/';
import { FilmControl } from './film-control';

export const Films = () => {
    const title = useSelector(selelectTitle);
    const posterURL = useSelector(selectPosterUrl);
    const raiting = useSelector(selectRaiting);

    return (
        <div>
            <div>Title : {title}</div>
            <div>Poster : {posterURL}</div>
            <div>Raiting : {raiting}</div>
            <FilmControl />
        </div>
    );
};
