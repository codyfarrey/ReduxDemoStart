import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import reducers from './reducers/index';

function App() {
    let store = createStore(reducers);
    return (
        <Provider store={store}>
            <div className="App">
                <First/>
                <Second/>
            </div>
        </Provider>
    );
}

export default App;
