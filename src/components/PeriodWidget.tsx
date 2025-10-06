import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

export default function PeriodWidget() {
    const [periodData, setPeriodData] = useState<string[] | null>(null);

    useEffect(() => {
        const getPeriodData = async () => {
            const data = await AsyncStorage.getAllKeys();
            const results = await AsyncStorage.multiGet(data);
            console.log("results: ", results.filter(([, value]) => {
                if (value) {
                    const parsed = JSON.parse(value);
                    return parsed.measurementType === "Period";
                }
                return false;
            }));
            setPeriodData(Array.from(data));
        };
        getPeriodData();
    }, []);

    return (
        <View>
            <Text>Period</Text>
            <Text>{periodData ?? "Loading..."}</Text>
        </View>
    );
}
