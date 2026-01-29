import { Theme } from '@/constants/theme'
import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface Button extends TouchableOpacityProps {
    children: React.ReactNode
}

export default function Button({ children }: Button) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Theme.colors.accent,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    text: {
        fontFamily: Theme.fonts.mono,
        color: Theme.colors.background,
        fontSize: 14,
        letterSpacing: 3,
    }
})