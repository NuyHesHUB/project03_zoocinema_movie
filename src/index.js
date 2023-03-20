import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer'
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
); 

reportWebVitals();

/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer'
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <App />
    </Provider>
    </QueryClientProvider>
); 

reportWebVitals(); */

/* import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { configureStore } from './store';
import { rootReducer} from './store/reducers'

import './styles/index.css';

const store = createStore(rootReducer)
const persistor = persistStore(store)

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById("root")); */

