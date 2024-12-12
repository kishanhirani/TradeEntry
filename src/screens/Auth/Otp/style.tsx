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
            // width: '100%'
            alignSelf: 'center'
        },
        enterView: {
            paddingHorizontal: ScaleSize.SPACING_20,
            paddingVertical: ScaleSize.SPACING_30
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
        boldText: {
            color: colors.black,
            fontFamily: AppFonts.FONT_BOLD
        },
        otpView: {
            paddingVertical: ScaleSize.SPACING_40
        },
        otpInput: {
            // borderBottomWidth:2
            // backgroundColor:'red',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'red'
        },
        arrowStyle: {
            position: "absolute",
            top: ScaleSize.SPACING_30,
            left: ScaleSize.SPACING_10,
            zIndex: 2000,
        },
        resendView: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: ScaleSize.SPACING_20,
            marginTop: ScaleSize.SPACING_30
        },
        resendText: {
            color: colors.button,
            fontSize: ScaleFonts.SIZE_18,
            fontFamily: AppFonts.FONT_MEDIUM,
        },
        resendText: {
            color: colors.border,
            fontSize: ScaleFonts.SIZE_18,
            fontFamily: AppFonts.FONT_MEDIUM,
        },
        timerText: {
            color: colors.black,
            fontSize: ScaleFonts.SIZE_20,
            fontFamily: AppFonts.FONT_REGULAR,


        }
    })