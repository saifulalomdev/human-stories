import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Theme } from '@/constants/theme'
import React from 'react'

export default function BrandFooter({ children , style}: { children: React.ReactNode, style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.footer, style]}>
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
        textAlign: "center"
    }
})