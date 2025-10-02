import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userPreferences: require("./reducers/userPreferences").default,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
