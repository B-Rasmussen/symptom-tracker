import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface TrackPeriodState {
    startDate: string | null;
    endDate: string | null;
    optInPeriodTracking: boolean;
}

const initialState: TrackPeriodState = {
    startDate: null,
    endDate: null,
    optInPeriodTracking: false,
};

export const trackPeriodSlice = createSlice({
    name: "trackPeriod",
    initialState,
    reducers: {
        setStartDate: (state, action: PayloadAction<string>) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action: PayloadAction<string>) => {
            state.endDate = action.payload;
        },
        toggleOptInPeriodTracking: (state) => {
            state.optInPeriodTracking = !state.optInPeriodTracking;
        },
        // resetTrackPeriod: () => initialState,
    },
});

export const {
    setStartDate,
    setEndDate,
    toggleOptInPeriodTracking,
    // resetTrackPeriod,
} = trackPeriodSlice.actions;

export const selectTrackPeriod = (state: RootState) => state.trackPeriod;

export default trackPeriodSlice.reducer;
