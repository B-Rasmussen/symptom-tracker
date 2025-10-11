import { Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

type inputWeightTempProps = {
    inputType: string;
};

export function InputWeightTemp({ inputType }: inputWeightTempProps) {
    const [userInput, setUserInput] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const userPreferences = useSelector((state: any) => state.userPreferences);
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [currentTime, setCurrentTime] = useState(new Date());

    const dateOnly = currentTime.toLocaleDateString([], {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    const timeOnly = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    useEffect(() => {
        const secondTimeOut = setInterval(() => {
            var date = new Date();
            // var trimmedDate = date.toISOString().replace(/\.\d+Z/, "Z");
            var trimmedDate = date.toLocaleString('sv').replace(' ', 'T') + 'Z';
            console.log('trimmedDate: ', trimmedDate);
            // var convertedDate = new Intl.DateTimeFormat(undefined, {dateStyle: 'short',timeStyle: 'long'}).format(date)
            // console.log("convertedDate: ", convertedDate);
            setDate(trimmedDate);
        }, 1000);
        return () => clearInterval(secondTimeOut);
    }, []);

    const measurementType =
        inputType === "Weight"
            ? userPreferences.usePounds
                ? "lbs"
                : "kg"
            : userPreferences.useFarenheit
            ? "Farenheit"
            : "Celsius";

    const recordUserInput = async () => {
        try {
            const input = parseFloat(userInput);
            const userInputToBeRecorded = {
                input,
                measurementType,
                date,
            };
            await AsyncStorage.setItem(
                `${date}`,
                JSON.stringify(userInputToBeRecorded)
            );

            Alert.alert(
                "Success!",
                `value saved as: ${input}\ndate: ${date}\nfor measurement ${inputType}\nmeasurement type ${measurementType}`
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
                // justifyContent: "space-between",
                alignItems: "center",
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <Text>{inputType} Screen</Text>
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
            <Button title="submit record" onPress={recordUserInput} />
        </View>
    );
}
