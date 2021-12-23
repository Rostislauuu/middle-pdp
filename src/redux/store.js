import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  
    sagaMiddleware.run(rootSaga);
  
    return store;
};

const store = configureStore();

const persistor = persistStore(store);

export { store, persistor };
