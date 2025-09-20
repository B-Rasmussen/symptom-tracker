import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";

interface buttonProps {
    buttonName: string;
    // buttonStyle?: StyleProp<ViewStyle>;
    onButtonPress: () => void;
}

export const Button = ({
    buttonName,
    // buttonStyle,
    onButtonPress,
}: buttonProps) => {
    return (
        <TouchableOpacity
            onPress={onButtonPress}
            // style={buttonStyle}
        >
            <Text>{buttonName}</Text>
        </TouchableOpacity>
    );
};
