import { View } from "react-native";
import React from "react";
import { InputWeightTemp } from "@/src/components/InputWeightTemp";

export default function RecordTemperature() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <InputWeightTemp inputType="Temperature" />
        </View>
    );
}
