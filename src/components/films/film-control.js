import { useDispatch } from 'react-redux';
import { StarIcon } from '@heroicons/react/24/solid';
import { setRatingAction } from 'actions';

export const FilmControl = () => {
    const dispach = useDispatch();

    const setRating = (event) => {
        console.log(event.currentTarget.id);
        dispach(setRatingAction(event.currentTarget.id));
    };
    return (
        <div className='flex'>
            {Array(5)
                .fill()
                .map((_, index) => (
                    <StarIcon
                        className='h-5 w-5 text-gray-500 cursor-pointer'
                        key={index}
                        id={`${index + 1}`}
                        onClick={setRating}></StarIcon>
                ))}
        </div>
    );
};
