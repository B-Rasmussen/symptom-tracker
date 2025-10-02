import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        trackPeriod: require("./reducers/trackPeriod").default,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
