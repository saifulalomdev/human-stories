import { Theme } from "@/constants/theme";
import { Href, Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ({ prompt, linkText, href }: { prompt: string, linkText: string, href: Href }) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.secondaryAction}>
                <Text style={styles.secondaryText}>
                    {prompt}{' '}
                    <Text style={styles.link}>
                        {linkText}
                    </Text>
                </Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    secondaryAction: {
        alignItems: 'center',
        marginTop: 10,
    },
    secondaryText: {
        fontFamily: Theme.fonts.mono,
        fontSize: 11,
        color: Theme.colors.inkFaded,
    },
    link: {
        fontWeight: "700",
        color: Theme.colors.accent
    }
})