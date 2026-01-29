import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Theme } from '@/constants/theme'

export default function KeyboardWrapper({ children }: { children?: React.ReactNode }) {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    scrollContent: {
        paddingHorizontal: Theme.spacing.gutter,
        paddingTop: 80,
        paddingBottom: 40,
    }
})