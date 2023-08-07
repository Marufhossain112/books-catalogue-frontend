import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from "./features/api/apiSlice";
import userReducer from "./features/user/userSlice";
import navbar from './features/navbar/navbar';
// Persist configuration for the regular Redux store
const reduxPersistConfig = {
    key: 'root', // Change this key if needed
    storage,
};
const rootReducer = userReducer;
// Persist configuration for the RTK Query cache


// Create the persisted reducer for the regular Redux store
const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);
const store = configureStore({
    reducer: {
        persistedReducer,
        // user: userReducer,
        navbar: navbar,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
// Persist the store
const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export { store, persistor };