import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface userPreferences {
    // startDate: string | null;
    // endDate: string | null;
    optInPeriodTracking: boolean;
    useFarenheit: boolean;
    usePounds: boolean;
}

const initialState: userPreferences = {
    // startDate: null,
    // endDate: null,
    optInPeriodTracking: false,
    useFarenheit: true,
    usePounds: true,
};

export const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState,
    reducers: {
        toggleFarenheit: (state) => {
            state.useFarenheit = !state.useFarenheit;
        },
        togglePounds: (state) => {
            state.usePounds = !state.usePounds;
        },
        // setStartDate: (state, action: PayloadAction<string>) => {
        //     state.startDate = action.payload;
        // },
        // setEndDate: (state, action: PayloadAction<string>) => {
        //     state.endDate = action.payload;
        // },
        toggleOptInPeriodTracking: (state) => {
            state.optInPeriodTracking = !state.optInPeriodTracking;
        },
        // resetTrackPeriod: () => initialState,
    },
});

export const {
    toggleFarenheit,
    togglePounds,
    // setStartDate,
    // setEndDate,
    toggleOptInPeriodTracking,
    // resetTrackPeriod,
} = userPreferencesSlice.actions;

export const selectTrackPeriod = (state: RootState) => state.userPreferences;

export default userPreferencesSlice.reducer;
