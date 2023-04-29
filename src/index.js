
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer'
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MovieProvider } from './components/Home/MovieContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
    <Provider store={store}>
        <MovieProvider>
            <App />
        </MovieProvider>
    </Provider>
); 

reportWebVitals();


