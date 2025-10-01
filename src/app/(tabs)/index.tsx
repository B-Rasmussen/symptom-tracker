import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Carousel } from "@/src/components/carousel/Carousel";

export default function Home() {
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
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <View style={{ flexDirection: "row", flex: 1 }}>
                {/* <StepWidget /> */}
                <Text>steps</Text>
                {/* <PeriodWidget /> */}
                <Text>period</Text>
            </View>
            <Carousel />
        </View>
    );
}

const styles = StyleSheet.create({});
