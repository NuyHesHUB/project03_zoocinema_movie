import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/reducer';

import './styles/App.css';
import Home from './router/Home';

function App() {
  const store = createStore(reducer);
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
        </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
