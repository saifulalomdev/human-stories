import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.header}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 40,
    },
})