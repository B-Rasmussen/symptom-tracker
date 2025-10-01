import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HandleNotFound() {
    return (
        <View style={styles.container}>
            <Text>rip 🪦 invalid url</Text>
            <Link href="/">Go Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
