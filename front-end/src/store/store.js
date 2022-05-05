import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";
import contactReducer from './reducers/contact-reducer';
import userReducer from './reducers/user-reducer';

const logger = createLogger();

const store = configureStore({
    reducer: {
        user: userReducer,
        message: contactReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({serializableCheck: false}), logger],
    devTools: process.env.NODE_ENV === "development",
});

// to : index.js
export default store;