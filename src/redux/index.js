import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import choseCategoryReducer from "./choseCategory/reducer";
import choseCategorySaga from './choseCategory/saga';

const rootReducer = combineReducers({
    choseCategory: choseCategoryReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(choseCategorySaga);
