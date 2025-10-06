import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { RootState } from "../store";

interface userPreferences {
    optInPeriodTracking: boolean;
    useFarenheit: boolean;
    usePounds: boolean;
    userProvidedPeriodLength: number;
    averagePeriodLength: number;
    userProvidedCycleLength: number;
    averagePredictedCycleLength: number;
}

const initialState: userPreferences = {
    optInPeriodTracking: true,
    useFarenheit: true,
    usePounds: true,
    userProvidedPeriodLength: 5,
    averagePeriodLength: 5,
    userProvidedCycleLength: 28,
    averagePredictedCycleLength: 28,
};

const wipePeriodData = async () => {
    const data = await AsyncStorage.getAllKeys();
    // const results = await AsyncStorage.multiGet(data);
    // const keysToDelete = results
    //     .filter(([, value]) => {
    //         if (value) {
    //             const parsed = JSON.parse(value);
    //             return parsed.measurementType === "Period";
    //         }
    //         return false;
    //     })
    //     .map(([key]) => key);
    await AsyncStorage.multiRemove(data);
}

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
        toggleOptInPeriodTracking: (state) => {
            state.optInPeriodTracking = !state.optInPeriodTracking;
            wipePeriodData();
        },
    },
});

export const { toggleFarenheit, togglePounds, toggleOptInPeriodTracking } =
    userPreferencesSlice.actions;

export const selectTrackPeriod = (state: RootState) => state.userPreferences;

export default userPreferencesSlice.reducer;
