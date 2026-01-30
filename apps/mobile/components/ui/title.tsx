import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { Theme } from '@/constants/theme'

export default function Title({ children , style}: { children: string , style?: StyleProp<TextStyle>}) {
    return (
        <Text style={[styles.title , style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Theme.fonts.title,
        fontSize: 36,
        color: Theme.colors.ink,
        letterSpacing: -1,
    },
})