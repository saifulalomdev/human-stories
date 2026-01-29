import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Dimensions
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function OTPScreen() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef<TextInput[]>([]);

    // Senior Tip: Auto-focus next input for smooth UX
    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.label}>Authentication</Text>
                    <Text style={styles.title}>Verify Your Identity</Text>
                    <Text style={styles.subtitle}>
                        We have sent a 6-digit passcode to your inbox.
                        Enter it below to unlock the sanctuary.
                    </Text>
                </View>

                {/* OTP Input Row */}
                <View style={styles.otpRow}>
                    {otp.map((digit, index) => (
                        <View key={index} style={styles.inputBox}>
                            <TextInput
                                ref={(ref) => {
                                    if (ref) inputs.current[index] = ref;
                                }} style={styles.otpInput}
                                maxLength={1}
                                keyboardType="number-pad"
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                selectionColor={Theme.colors.accent}
                            />
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
                    <Text style={styles.buttonText}>VERIFY ACCESS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resendAction}>
                    <Text style={styles.resendText}>
                        Didn't get the code? <Text style={styles.accentText}>Resend</Text>
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.footer}>
                <Ionicons name="shield-outline" size={12} color={Theme.colors.inkSubtle} />
                <Text style={styles.footerLegal}>SECURE END-TO-END</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
    content: {
        paddingHorizontal: Theme.spacing.gutter,
        paddingTop: 80,
    },
    header: {
        marginBottom: 50,
    },
    label: {
        fontFamily: Theme.fonts.mono,
        fontSize: 10,
        letterSpacing: 3,
        color: Theme.colors.accent,
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    title: {
        fontFamily: Theme.fonts.title,
        fontSize: 32,
        color: Theme.colors.ink,
    },
    subtitle: {
        fontFamily: Theme.fonts.body,
        fontSize: 16,
        lineHeight: 24,
        color: Theme.colors.inkFaded,
        marginTop: 15,
    },
    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    inputBox: {
        width: (Dimensions.get('window').width - (Theme.spacing.gutter * 2) - 50) / 6,
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: Theme.colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpInput: {
        fontFamily: Theme.fonts.mono,
        fontSize: 28,
        color: Theme.colors.ink,
        textAlign: 'center',
    },
    primaryButton: {
        backgroundColor: Theme.colors.ink,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Theme.fonts.mono,
        color: Theme.colors.background,
        fontSize: 14,
        letterSpacing: 2,
    },
    resendAction: {
        marginTop: 25,
        alignItems: 'center',
    },
    resendText: {
        fontFamily: Theme.fonts.mono,
        fontSize: 11,
        color: Theme.colors.inkFaded,
    },
    accentText: {
        color: Theme.colors.accent,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    footerLegal: {
        fontFamily: Theme.fonts.mono,
        fontSize: 8,
        letterSpacing: 2,
        color: Theme.colors.inkSubtle,
    }
});