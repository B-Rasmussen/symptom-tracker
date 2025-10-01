import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function RecordSymptoms() {
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
            <Text>record symptioms Screen</Text>
            <Link href={"/recordSymptoms/record-weight"}>Log Weight</Link>
            <Link href={"/recordSymptoms/record-temperature"}>
                Log Temperature
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({});
