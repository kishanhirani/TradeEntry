import { StyleSheet } from "react-native"
import { ScaleSize } from "../../helper/ScaleSize"
import { ScaleFonts } from "../../helper/ScaleFonts"
import { AppFonts } from "../../helper/AppFonts"
import { IColors } from "../../helper/Colors"

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
            // paddingTop: ScaleSize.SPACING_15,
            // paddingHorizontal: ScaleSize.SPACING_35,
        },

    })