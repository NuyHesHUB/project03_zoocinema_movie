import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/reducer';

import './styles/App.css';
import Home from './router/Home';
import Navigation from './router/Navigation';
import HomeDetail from './components/Home/HomeDetail.jsx'

function App() {
  const store = createStore(reducer);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
        <Navigation/>
          <Routes>
            <Route path={"/App"} element={<Home/>}></Route>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/detail/:id"} element={<HomeDetail/>}></Route>
          </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

