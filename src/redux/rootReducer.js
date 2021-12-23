import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userProfileReducer from "./reducers/userProfile";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userProfile"]
}

const rootReducer = combineReducers({
    userProfile: userProfileReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
