import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Theme } from '@/constants/theme'

export default function Title({ children }: { children: string }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Theme.fonts.title,
        fontSize: 40,
        color: Theme.colors.ink,
        letterSpacing: -1,
    },
})