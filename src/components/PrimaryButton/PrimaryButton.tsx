import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStyles } from './styles'
import { useTheme } from '@react-navigation/native'

interface ButtonProps {
    title: string
    onPress: () => void
    disable?: boolean
}

const PrimaryButton = (props: ButtonProps) => {
    //hooks
    const { colors } = useTheme()
    const styles = createStyles(colors)

    //props		
    const { onPress, title, disable } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, { opacity: disable ? 0.6 : 1 }]}
            activeOpacity={0.7}
        >
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton
