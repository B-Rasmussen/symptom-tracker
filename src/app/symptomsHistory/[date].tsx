import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";

interface weightDataInterface {
    input: number;
    measurementType: string;
    date: string;
}

export default function SymptomsThisDay() {
    const { date } = useLocalSearchParams();
    const [weightData, setWeightData] = useState<weightDataInterface[] | null>(
        null
    );
    const [temperatureData, setTemperatureData] = useState<string[] | null>(
        null
    );
    const [symptomData, setSymptomData] = useState<string[] | null>(null);

    const convertToLocalTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    useEffect(() => {
        const getWeightData = async () => {
            const data = await AsyncStorage.getAllKeys();
            const dataForDate = data.filter((key) => key.match(date as string));
            const values = await AsyncStorage.multiGet(dataForDate);
            const parsedValues: weightDataInterface[] = values
                .map(([key, value]) => (value ? JSON.parse(value) : null))
                .filter(Boolean) as weightDataInterface[];
            setWeightData(parsedValues);
        };
        getWeightData();
    }, []);

    // useEffect(() => {
    //     const getTemperatureData = async () => {
    //         const data = await AsyncStorage.getAllKeys();
    //         const results = await AsyncStorage.multiGet(data);
    //         // results.filter(([, value]) => {
    //         //     if (value) {
    //         //         const parsed = JSON.parse(value);
    //         //         return parsed.measurementType === "Temperature";
    //         //     }
    //         //     return false;
    //         // });
    //         setTemperatureData(results.map(([key]) => key));
    //     };
    //     getTemperatureData();
    // }, []);

    // useEffect(() => {
    //     const getSymptomData = async () => {
    //         const data = await AsyncStorage.getAllKeys();
    //         const results = await AsyncStorage.multiGet(data);
    //         // results.filter(([, value]) => {
    //         //     if (value) {
    //         //         const parsed = JSON.parse(value);
    //         //         return parsed.measurementType === "Symptom";
    //         //     }
    //         //     return false;
    //         // });
    //         setSymptomData(results.map(([key]) => key));
    //     };
    //     getSymptomData();
    // }, []);

    // console.log("weight data: ", weightData);
    // console.log("temperature data: ", temperatureData);
    // console.log("symptom data: ", symptomData);

    return (
        <View style={styles.container}>
            <Text>Symptoms recorded on {date}</Text>
            {weightData &&
                weightData.map((item) => (
                    <Text key={item.date}>
                        local {convertToLocalTime(item.date)}{`\n`}
                        Weight entry at{" "}
                        {item.date.split("T")[1].replace("Z", "")}: {item.input}{" "}
                        {item.measurementType}
                    </Text>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
});
