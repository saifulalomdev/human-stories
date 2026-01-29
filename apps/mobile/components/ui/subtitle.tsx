import { Text, StyleSheet } from 'react-native'
import { Theme } from '@/constants/theme'

export default function Subtitle({ children }: { children: string }) {
    return (
        <Text style={styles.subtitle}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontFamily: Theme.fonts.body,
        fontSize: 16,
        lineHeight: 24,
        color: Theme.colors.inkFaded,
        marginTop: 12,
    },
})