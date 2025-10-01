import { Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

type inputWeightTempProps = {
    inputType: string;
};

export function InputWeightTemp({ inputType }: inputWeightTempProps) {
    const [userInput, setUserInput] = useState("");
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

    const recordUserInput = async () => {
        try {
            // const userInputToBeRecorded = {
            //     userInput: { userInput },
            //     measurementType: { measurementType },
            //     data: { date },
            //     time: { time },
            // };
            // await AsyncStorage.multiSet()
            
            // Alert.alert(
            //     `value saved as: ${userInput} date: ${date} time: ${time} for measurement ${inputType} measurem type ${measurementType}`
            // );
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
            <View style={{ flexDirection: "row" }}>
                <Text>{inputType} Input:</Text>
                <TextInput
                    keyboardType="numeric"
                    placeholder={inputType}
                    inputMode="numeric"
                    value={userInput}
                    onChangeText={setUserInput}
                    style={{
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingStart: 4,
                        paddingEnd: 4,
                    }}
                />
            </View>
            <View>
                <Text>Current Date: {date}</Text>
                <Text>Current Time: {time}</Text>
            </View>
            <Button title="submit record" onPress={recordUserInput} />
        </View>
    );
}
