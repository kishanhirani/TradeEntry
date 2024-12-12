import { StyleSheet } from "react-native";
import { ScaleSize } from "../../helper/ScaleSize";
import { IColors } from "../../helper/Colors";
import { ScaleFonts } from "../../helper/ScaleFonts";
import { AppFonts } from "../../helper/AppFonts";

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: colors.border,
            height: ScaleSize.SPACING_50,
            justifyContent: "center",
            borderRadius: ScaleSize.SPACING_4,
            marginBottom: ScaleSize.SPACING_15
        },
        textinputStyles: {
            color: colors.black,
            fontSize: ScaleFonts.SIZE_16,
            fontFamily: AppFonts.FONT_REGULAR,
        },
        prefix: {
            position: "absolute",
            paddingHorizontal: ScaleSize.SPACING_10,
            fontSize: ScaleFonts.SIZE_16,
            fontFamily: AppFonts.FONT_REGULAR
        },
        errorText: {
            alignSelf: "flex-end",
            color: colors.error,
            top: -ScaleSize.SPACING_15
            // position: "absolute",
        }

    });