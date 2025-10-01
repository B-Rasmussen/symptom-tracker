import { View } from "react-native";
import React from "react";
import { InputWeightTemp } from "@/src/components/InputWeightTemp";

export default function RecordWeight() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <InputWeightTemp inputType="Weight" />
        </View>
    );
}
