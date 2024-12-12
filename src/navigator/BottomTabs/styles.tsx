import { StyleSheet } from "react-native";
import { IColors } from "../../helper/Colors";
import { ScaleSize } from "../../helper/ScaleSize";
import { width } from "../../helper/Responsive";

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            height: ScaleSize.SPACING_70,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: ScaleSize.SPACING_20,
            boxShadow: "0 7 10 3"

        },
        tabButton: {
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            height: ScaleSize.SPACING_25,
            width: ScaleSize.SPACING_25,
        },
    })