import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function SymptomsHistory() {
    return (
        <View>
            <Text>symptom history Screen</Text>
            <Link href="/symptomsHistory/1">symptom 1</Link>
        </View>
    );
}

const styles = StyleSheet.create({});
