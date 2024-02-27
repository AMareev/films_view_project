import { useEffect } from 'react';
import { Films } from './components/films/films';
// import { GetDataFromServer } from 'hooks';
import { useDispatch } from 'react-redux';
import { GetDataFromServer } from 'actions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        GetDataFromServer()(dispatch);
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <Films />
            </header>
        </div>
    );
}

export default App;
