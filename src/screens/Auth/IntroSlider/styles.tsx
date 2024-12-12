import { StyleSheet } from "react-native"
import { ScaleSize } from "../../../helper/ScaleSize"
import { ScaleFonts } from "../../../helper/ScaleFonts"
import { AppFonts } from "../../../helper/AppFonts"
import { IColors } from "../../../helper/Colors"
import { height, width } from "../../../helper/Responsive"

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
        imageIntro: {
            width: width,
            height: height,
        },
        button: {
            borderWidth: 1,
            width: ScaleSize.SPACING_50 * 2.6,
            alignSelf: 'center',
            borderColor: '#1C3D87',
            paddingVertical: ScaleSize.SPACING_2 * 4,
            marginTop: -ScaleSize.SPACING_50,
            borderRadius: ScaleSize.SPACING_5
        },
        donebutton: {
            borderWidth: 1,
            width: ScaleSize.SPACING_50 * 2.6,
            alignSelf: 'center',
            borderColor: '#1C3D87',
            backgroundColor: '#1C3D87',
            paddingVertical: ScaleSize.SPACING_2 * 4,
            marginTop: -ScaleSize.SPACING_50,
            borderRadius: ScaleSize.SPACING_5,
        },
        buttonText: {
            textAlign: 'center',
            fontSize: ScaleFonts.SIZE_14,
            fontFamily: AppFonts.FONT_REGULAR,
        },
        donebuttonText: {
            textAlign: 'center',
            fontSize: ScaleFonts.SIZE_14,
            fontFamily: AppFonts.FONT_REGULAR,
            color: 'white'
        }
    })