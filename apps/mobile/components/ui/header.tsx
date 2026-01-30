import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

export default function Header({ children, style }: { children: React.ReactNode, style?: StyleProp<ViewStyle> }) {
    return (
        <View style={[styles.header, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 40,
    },
})