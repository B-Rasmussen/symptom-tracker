import { RelativePathString } from "expo-router";

type carouselDataProps = {
    id: number;
    carouselTitle: string;
    linkTo: RelativePathString;
};

export const carouselData: carouselDataProps[] = [
    {
        id: 0,
        carouselTitle: "Weight",
        linkTo: "/logEntryScreens/record-weight" as RelativePathString,
    },
    {
        id: 1,
        carouselTitle: "Temperature",
        linkTo: "/logEntryScreens/record-temperature" as RelativePathString,
    },
    {
        id: 2,
        carouselTitle: "Period",
        linkTo: "/logEntryScreens/record-period" as RelativePathString,
    },
];
