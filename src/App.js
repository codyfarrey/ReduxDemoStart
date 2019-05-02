import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import First from './components/First';
import Second from './components/Second';

function App() {
    let store = createStore(() => {});
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
