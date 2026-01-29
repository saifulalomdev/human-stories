import { View, Text, StyleSheet } from 'react-native'
import { Theme } from '@/constants/theme'
import React from 'react'

export default function BrandFooter({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerBrand}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 60,
        alignItems: 'center',
    },
    footerBrand: {
        fontFamily: Theme.fonts.mono,
        fontSize: 9,
        letterSpacing: 3,
        color: Theme.colors.border,
    }
})