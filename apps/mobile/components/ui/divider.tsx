import { View, Text, StyleSheet } from 'react-native'
import { ReactNode } from 'react'
import { Theme } from '@/constants/theme'

export default function Divider({ children }: { children?: ReactNode }) {
    return (
        < View style={styles.dividerRow} >
            <View style={styles.line} />
            <Text style={styles.dividerText}>{children}</Text>
            <View style={styles.line} />
        </View >
    )
}

const styles = StyleSheet.create({
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Theme.colors.border,
    },
    dividerText: {
        fontFamily: Theme.fonts.mono,
        fontSize: 10,
        marginHorizontal: 15,
        color: Theme.colors.inkSubtle,
    },
})