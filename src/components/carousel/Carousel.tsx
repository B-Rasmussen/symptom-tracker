import {
    TouchableOpacity,
    Text,
    View,
    Animated,
    Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { carouselData } from "./carouselData";
import { Link } from "expo-router";

const { width: windowWidth } = Dimensions.get("window");

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const flatlistRef = useRef<Animated.FlatList<any>>(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % carouselData.length;
            setCurrentIndex(nextIndex);
            flatlistRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
        }, 3000);
        return () => clearInterval(timer);
    });

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const onViewItemChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View>
            <Animated.FlatList
                ref={flatlistRef}
                data={carouselData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                onViewableItemsChanged={onViewItemChanged}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * windowWidth,
                        index * windowWidth,
                        (index + 1) * windowWidth,
                    ];
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1],
                        extrapolate: "clamp",
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1],
                        extrapolate: "clamp",
                    });

                    return (
                        <Animated.View
                            style={{
                                width: windowWidth,
                                transform: [{ scale }],
                                opacity,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "green",
                                    height: 200,
                                }}
                            >
                                <Text>{item.carouselTitle}</Text>
                                <Link href={item.linkTo}>
                                    <Text
                                        style={{
                                            backgroundColor: "red",
                                            padding: 10,
                                            color: "white",
                                            width: 100,
                                            textAlign: "center",
                                            borderRadius: 5,
                                        }}
                                    >
                                        Record Now
                                    </Text>
                                </Link>
                            </View>
                        </Animated.View>
                    );
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 10,
                }}
            >
                {carouselData.map((_, index) => {
                    const opacity = currentIndex === index ? 1 : 0.5;
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    flatlistRef.current?.scrollToIndex({
                                        index,
                                        animated: true,
                                    });
                                    setCurrentIndex(index);
                                }}
                            >
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor:
                                            index === currentIndex
                                                ? "green"
                                                : "black",
                                        margin: 5,
                                        opacity,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
