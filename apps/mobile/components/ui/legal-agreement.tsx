import { Theme } from '@/constants/theme';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function LegalAgreement() {
    return (
        <Text style={styles.agreementText}>
            By signing up, you agree to our{' '}
            <Text style={styles.link} >Manifesto
            </Text>{' '}
            and our commitment to{' '}
            <Text style={styles.link}>Human Privacy</Text>.
        </Text>
    );
};

const styles = StyleSheet.create({
    agreementText: {
        fontFamily: Theme.fonts.body,
        fontSize: 13,
        color: Theme.colors.inkSubtle,
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    link: {
        color: Theme.colors.ink,
        textDecorationLine: 'underline',
    },
});

