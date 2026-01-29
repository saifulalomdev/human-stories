import { Text, StyleSheet } from 'react-native'
import { Theme } from '@/constants/theme'

export default function Label({ children }: { children: string }) {
    return (
        <Text style={styles.label}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: Theme.fonts.mono,
        fontSize: 10,
        letterSpacing: 2,
        color: Theme.colors.accent,
        textTransform: 'uppercase',
        marginBottom: 12,
    },
})