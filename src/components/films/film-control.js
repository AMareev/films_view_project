import { useDispatch } from 'react-redux';
import { StarIcon } from '@heroicons/react/24/solid';
// import { setRatingAction } from 'actions';
import { putDataToServer } from 'actions';

export const FilmControl = ({ filmIndex, children }) => {
    const dispach = useDispatch();
    const changeRating = (event) => {
        // @ts-ignore
        dispach(putDataToServer(event));
    };

    return (
        <div className='flex'>
            <div>{children}/5</div>

            {Array(5)
                .fill()
                .map((_, index) => (
                    <StarIcon
                        className={`${
                            index + 1 <= children
                                ? 'text-yellow-500'
                                : 'text-gray-500'
                        } h-5 w-5 cursor-pointer`}
                        key={index}
                        id={`${index + 1}`}
                        data-film-index={filmIndex}
                        onClick={changeRating}></StarIcon>
                ))}
        </div>
    );
};
