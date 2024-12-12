import { StyleSheet } from "react-native";
import { IColors } from "../../helper/Colors";
import { ScaleSize } from "../../helper/ScaleSize";
import { ScaleFonts } from "../../helper/ScaleFonts";
import { AppFonts } from "../../helper/AppFonts";

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.button,
            height: ScaleSize.SPACING_50,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: ScaleSize.SPACING_4,
            marginBottom: ScaleSize.SPACING_20
        },
        titleText: {
            color: colors.background,
            alignSelf: "center",
            fontSize: ScaleFonts.SIZE_16,
            fontFamily: AppFonts.FONT_BOLD
        }
    })