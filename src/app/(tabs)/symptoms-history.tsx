import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SymptomsHistory() {
    const insets = useSafeAreaInsets();
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
            <Text>symptom history Screen</Text>
            <Link href="/symptomsHistory/1">symptom 1</Link>
        </View>
    );
}

const styles = StyleSheet.create({});
