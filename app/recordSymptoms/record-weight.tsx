import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function RecordWeight() {
    const [weightInput, setWeightInput] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const date = currentTime.toLocaleDateString([], {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const time = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const recordWeight = async () => {
        try {
            Alert.alert(
                `value saved as: ${weightInput} date: ${date} time: ${time}`
            );
        } catch (error) {
            console.error("error: ", error);
        }
        router.back();
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
            <View>
                <Text>Weight Input:</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder="weight"
                    inputMode="numeric"
                    value={weightInput}
                    onChangeText={setWeightInput}
                />
            </View>
            <View>
                <Text>Current Date: {date}</Text>
                <Text>Current Time: {time}</Text>
            </View>
            <Button title="submit record" onPress={recordWeight} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
