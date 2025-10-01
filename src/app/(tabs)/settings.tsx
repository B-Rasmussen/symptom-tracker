import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
    const insets = useSafeAreaInsets();
    const [trackPeriod, setTrackPeriod] = useState(false);
    const [useFarenheit, setUseFarenheit] = useState(true);
    const [usePounds, setUsePounds] = useState(true);
    const [theme, setTheme] = useState("string");

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
        </View>
    );
}

const styles = StyleSheet.create({});
