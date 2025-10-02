import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleFarenheit,
    togglePounds,
    toggleOptInPeriodTracking,
} from "../../redux/reducers/userPreferences";

export default function Settings() {
    const insets = useSafeAreaInsets();
    const [theme, setTheme] = useState("string");

    const userPreferences = useSelector((state: any) => state.userPreferences);
    const dispatch = useDispatch();
    console.log("trackPeriod: ", userPreferences);

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
            <Text>App Settings</Text>
            <TouchableOpacity onPress={() => dispatch(toggleFarenheit())}>
                <Text>
                    Temperature system:{" "}
                    {userPreferences.useFarenheit == true ? (
                        <Text>Farenheit</Text>
                    ) : (
                        <Text>Celsius</Text>
                    )}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(togglePounds())}>
                <Text>
                    Weight system:{" "}
                    {userPreferences.usePounds == true ? (
                        <Text>Imperial</Text>
                    ) : (
                        <Text>Metric</Text>
                    )}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(toggleOptInPeriodTracking())}
            >
                <Text>
                    Track Period:{" "}
                    {userPreferences.optInPeriodTracking == true ? (
                        <Text>Opt In</Text>
                    ) : (
                        <Text>Opt Out</Text>
                    )}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
