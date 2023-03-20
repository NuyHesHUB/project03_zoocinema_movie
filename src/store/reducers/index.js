/* import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import one from '../../router/Home.jsx'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["one"] // one, two reducer 중 one reducer만 localstorage에 저장한다.
  };
  
  export const rootReducer = combineReducers({
    one,
  });
  
  export default persistReducer(persistConfig, rootReducer); */