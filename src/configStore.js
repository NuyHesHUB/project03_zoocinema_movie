/* import { createStore, combineReducers, applyMiddleware } from 'redux';
import word from './router/Home';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({word: word,});

const perReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(perReducer, enhancer);
export default store; */