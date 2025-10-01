import { RelativePathString } from "expo-router";

type carouselDataProps = {
    id: number;
    carouselTitle: string;
    linkTo: RelativePathString;
};

export const carouselData: carouselDataProps[] = [
    { id: 0, carouselTitle: "Weight", linkTo: "/recordSymptoms/record-weight" as RelativePathString },
    {
        id: 1,
        carouselTitle: "Temperature",
        linkTo: "/recordSymptoms/record-temperature" as RelativePathString,
    },
];
