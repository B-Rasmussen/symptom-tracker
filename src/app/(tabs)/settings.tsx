import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { toggleOptInPeriodTracking } from "../../redux/reducers/trackPeriod";

export default function Settings() {
    const insets = useSafeAreaInsets();
    const [useFarenheit, setUseFarenheit] = useState(true);
    const [usePounds, setUsePounds] = useState(true);
    const [theme, setTheme] = useState("string");

    const trackPeriod = useSelector((state: any) => state.trackPeriod);
    const dispatch = useDispatch();
    console.log("trackPeriod: ", trackPeriod);

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
            <TouchableOpacity
                onPress={() => dispatch(toggleOptInPeriodTracking())}
            >
                <Text>
                    Track Period?{" "}
                    {trackPeriod.optInPeriodTracking && <Text>✅</Text>}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
