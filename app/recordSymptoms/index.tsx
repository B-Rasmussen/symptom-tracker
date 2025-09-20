import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RecordSymptom() {
    return (
        <View style={styles.container}>
            <Text>record Symptoms</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
