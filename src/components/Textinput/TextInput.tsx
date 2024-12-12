import { StyleSheet, Text, View, TextInput as BaseTextInput, KeyboardTypeOptions } from 'react-native'
import React, { LegacyRef } from 'react'
import { useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import { regex } from '../../helper/Utils';
import { ScaleSize } from '../../helper/ScaleSize';
import { ScaleFonts } from '../../helper/ScaleFonts';
import { AppFonts } from '../../helper/AppFonts';
import { IColors } from '../../helper/Colors';

export interface ITextInput {
    value: string;
    refs?: LegacyRef<BaseTextInput>;
    error: string;
    isSecure?: boolean;
    disabled?: boolean;
    onChange: (arg0: string) => void;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    placeholder?: string;
    prefix?: string;
    onSubmit?: () => void
}


const TextInput = (props: ITextInput) => {
    const { disabled, error, isSecure, value, refs, onChange, onSubmit, keyboardType, maxLength, placeholder, prefix } = props

    //hooks
    const colors: IColors = useTheme().colors
    const styles = createStyles(colors)
    const validateNumberInput = (text: string): string => {
        const numbersOnly = text.split('').filter(char => /^[0-9]$/.test(char)).join('');
        return numbersOnly;
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.prefix}>{prefix}</Text>
                <BaseTextInput
                    value={value}
                    style={[styles.textinputStyles, { paddingLeft: prefix ? ScaleSize.SPACING_40 : ScaleSize.SPACING_10 }]}
                    ref={refs}
                    placeholderTextColor={colors.text}
                    onChangeText={(text) => {
                        if (keyboardType === "numeric") {
                            onChange(validateNumberInput(text))
                        } else {
                            onChange(text.trim().length === 0 ? "" : text.replace(regex, ""))
                        }
                    }}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    onSubmitEditing={onSubmit}
                />
            </View >
            {error &&
                <Text style={styles.errorText}>{error}</Text>
            }
        </>
    )
}

export default TextInput
