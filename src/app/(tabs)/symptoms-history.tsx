import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SymptomsHistory() {
    const insets = useSafeAreaInsets();
    const one: number = 1;

    const [currentDate, setCurrentDate] = React.useState(new Date());

    const previousWeek = () => {
        const prevWeek = new Date();
        prevWeek.setDate(currentDate.getDate() - 7);
        setCurrentDate(prevWeek);
    };

    const nextWeek = () => {
        const nextWeek = new Date();
        nextWeek.setDate(currentDate.getDate() + 7);
        setCurrentDate(nextWeek);
    };

    const renderDays = () => {
        const days = [];
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            days.push(
                <View
                    key={i}
                    style={{
                        // alignItems: "center",
                        margin: 5,
                    }}
                >
                    <Link
                        href={`/symptomsHistory/${
                            day.toISOString().split("T")[0]
                        }`}
                    >
                        <Text>
                            {day.toLocaleDateString("en-US", {
                                weekday: "short",
                            })}
                        </Text>
                        <Text>{day.getDate()}</Text>
                    </Link>
                </View>
            );
        }
        return days;
    };

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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                    onPress={previousWeek}
                    style={{ margin: 10, fontSize: 18 }}
                >
                    {"<"}
                </Text>
                {renderDays()}
                <Text onPress={nextWeek} style={{ margin: 10, fontSize: 18 }}>
                    {">"}
                </Text>
            </View>
            {/* <Link href={`/symptomsHistory/${one}`}>symptom 1</Link>
            <Link href="/symptomsHistory/2">symptom 2</Link>
            <Link href="/symptomsHistory/3">symptom 3</Link> */}
        </View>
    );
}

const styles = StyleSheet.create({});
