import { StyleSheet } from "react-native"
import { ScaleSize } from "../../../helper/ScaleSize"
import { ScaleFonts } from "../../../helper/ScaleFonts"
import { AppFonts } from "../../../helper/AppFonts"
import { IColors } from "../../../helper/Colors"

export const createStyles = (colors: IColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: ScaleSize.SPACING_15,
            paddingHorizontal: ScaleSize.SPACING_35,
            backgroundColor: colors.background
        },
        loginImage: {
            width: '100%'
        },
        enterView: {
            paddingHorizontal: ScaleSize.SPACING_20,
            paddingVertical: ScaleSize.SPACING_30
        },
        infoview: {
            paddingBottom: ScaleSize.SPACING_30
        },
        enterNumber: {
            fontSize: ScaleFonts.SIZE_30,
            color: colors.black,
            fontFamily: AppFonts.FONT_BOLD
        },
        otpText: {
            marginTop: ScaleSize.SPACING_15,
            fontSize: ScaleFonts.SIZE_16,
            color: colors.black,
            fontFamily: AppFonts.FONT_REGULAR
        },
        textInputView: {
            marginTop: ScaleSize.SPACING_50,
            marginBottom: ScaleSize.SPACING_30,
            height: ScaleSize.SPACING_40,
            borderWidth: 0.5,
            borderRadius: ScaleSize.SPACING_5
        },
        continueView: {
            height: ScaleSize.SPACING_50,
            backgroundColor: '#1C3D87',
            borderRadius: ScaleSize.SPACING_5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        continueText: {
            color: colors.white
        },
        byContinue: {
            color: colors.black,
            fontSize: ScaleFonts.SIZE_12 + ScaleFonts.SIZE_10 / 8,
            fontFamily: AppFonts.FONT_REGULAR,
            textAlign: 'center'
        },
        boldText: {
            color: colors.black,
            fontSize: ScaleFonts.SIZE_12 + ScaleFonts.SIZE_10 / 8,
            fontFamily: AppFonts.FONT_BOLD
        }
    })