import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
    return (
        <Tabs backBehavior="history">
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarAccessibilityLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={24} />
                    ),
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "purple",
                }}
            />
            <Tabs.Screen
                name="record-symptoms"
                options={{
                    tabBarLabel: "Record",
                    tabBarAccessibilityLabel: "Record",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome name="pencil" color={color} size={24}/>,
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "purple",
                }}
            />
            <Tabs.Screen
                name="symptoms-history"
                options={{
                    tabBarLabel: "History",
                    tabBarAccessibilityLabel: "History",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="calendar" color={color} size={24} />
                    ),
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "purple",
                }}
            />
        </Tabs>
    );
}
