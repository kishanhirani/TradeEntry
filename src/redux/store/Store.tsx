import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
            actionCreatorCheck: false,
            // }),
        }).concat(logger),
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>



