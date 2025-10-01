import {
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    View,
} from "react-native";
import { carouselData } from "./carouselData";
import { Link } from "expo-router";

interface carouselProps {}

export const Carousel = ({}: carouselProps) => {
    return (
        <View>
            {carouselData.map((item) => (
                <TouchableOpacity key={item.id} style={{ margin: 10 }}>
                    <Link href={item.linkTo}>{item.carouselTitle}</Link>
                </TouchableOpacity>
            ))}
        </View>
    );
};
