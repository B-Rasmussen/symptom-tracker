import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { Dimensions } from "react-native";

export default function TabsLayout() {
    const { height } = Dimensions.get("window");
    return (
        <Tabs
            backBehavior="history"
            screenOptions={{
                tabBarItemStyle: {
                    borderWidth: 1,
                    borderRadius: 20,
                    margin: 5,
                    // borderTopWidth: 1,
                    // borderLeftWidth: 1,
                    // borderRightWidth: 1,
                    height: height * 0.07,
                },
            }}
        >
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarLabel: "Settings",
                    tabBarAccessibilityLabel: "Settings",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" color={color} size={24} />
                    ),
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "purple",
                }}
            />
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
                    tabBarLabel: "Log Entry",
                    tabBarAccessibilityLabel: "Log Entry",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="pencil" color={color} size={24} />
                    ),
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
