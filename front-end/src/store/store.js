import userReducer from './reducers/user-reducer';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), /* middlewares */],
    devTools: process.env.NODE_ENV === 'development',

    })

// to : index.js
export default store;