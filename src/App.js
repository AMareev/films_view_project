import { useEffect } from 'react';
import { Films } from './components/films/films';
import { filmsRef } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    const initializeState = () => async (dispatch) => {
        try {
            const { data } = await filmsRef.get(`/001.json`);
            dispatch({
                type: 'SET_INITIAL_STATE',
                payload: data,
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        console.log('into useeffect');
        initializeState()(dispatch);
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' alt='logo' /> */}
                <Films />
            </header>
        </div>
    );
}

export default App;
