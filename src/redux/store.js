import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import RootReducer from "./RootReducer";

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
