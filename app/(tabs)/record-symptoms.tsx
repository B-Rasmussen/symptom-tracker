import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RecordSymptoms() {
    const [temperatureInput, setTemperatureInput] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const insets = useSafeAreaInsets();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const recordTemperature = async () => {
        const now = new Date();
        const date = currentTime.toLocaleDateString([], {
            // weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
        const time = currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        try {
            Alert.alert(
                `value saved as: ${temperatureInput} date: ${date} time: ${time}`
            );
        } catch (error) {
            console.error("error: ", error);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <Text>record symptioms Screen</Text>
            <TextInput
                
                keyboardType="numeric"
                placeholder="temp"
                inputMode="numeric"
                value={temperatureInput}
                onChangeText={setTemperatureInput}
            />
            <Button title="submit record" onPress={recordTemperature} />
        </View>
    );
}

const styles = StyleSheet.create({});
