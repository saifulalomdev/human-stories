import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.content}>
        
        {/* Back Button for Navigation */}
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color={Theme.colors.ink} />
          <Text style={styles.backText}>RETURN</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.label}>Account Recovery</Text>
          <Text style={styles.title}>Lost the Key?</Text>
          <Text style={styles.subtitle}>
            Enter the email associated with your pen name. We will send a 
            unique recovery link to your inbox.
          </Text>
        </View>

        {!isSent ? (
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>RECOVERY EMAIL</Text>
              <TextInput 
                style={styles.input}
                placeholder="yourname@humanstories.app"
                placeholderTextColor={Theme.colors.inkSubtle}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <TouchableOpacity 
              style={styles.primaryButton} 
              activeOpacity={0.9}
              onPress={() => setIsSent(true)}
            >
              <Text style={styles.buttonText}>SEND RECOVERY LINK</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.successState}>
            <View style={styles.goldDivider} />
            <Text style={styles.successText}>
              A recovery link has been dispatched to <Text style={{color: Theme.colors.ink}}>{email}</Text>. 
              Please check your spam folder if it does not arrive within minutes.
            </Text>
            <TouchableOpacity onPress={() => setIsSent(false)}>
              <Text style={styles.resendText}>DIDN'T RECEIVE IT? TRY AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerHelp}>NEED ASSISTANCE? SUPPORT@HUMANSTORIES.APP</Text>
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
    paddingTop: 60,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
  },
  backText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 1.5,
    color: Theme.colors.ink,
  },
  header: {
    marginBottom: 40,
  },
  label: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 3,
    color: Theme.colors.accentGold, // Using Gold for recovery states
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  title: {
    fontFamily: Theme.fonts.title,
    fontSize: 36,
    color: Theme.colors.ink,
    letterSpacing: -1,
  },
  subtitle: {
    fontFamily: Theme.fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: Theme.colors.inkFaded,
    marginTop: 15,
  },
  form: {
    gap: 30,
  },
  inputGroup: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
    paddingBottom: 10,
  },
  inputLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    letterSpacing: 1,
    color: Theme.colors.inkSubtle,
    marginBottom: 6,
  },
  input: {
    fontFamily: Theme.fonts.body,
    fontSize: 18,
    color: Theme.colors.ink,
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
  successState: {
    paddingVertical: 20,
  },
  goldDivider: {
    width: 40,
    height: 2,
    backgroundColor: Theme.colors.accentGold,
    marginBottom: 20,
  },
  successText: {
    fontFamily: Theme.fonts.body,
    fontSize: 16,
    lineHeight: 26,
    color: Theme.colors.inkFaded,
    marginBottom: 30,
  },
  resendText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    color: Theme.colors.accent,
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  footerHelp: {
    fontFamily: Theme.fonts.mono,
    fontSize: 8,
    letterSpacing: 2,
    color: Theme.colors.inkSubtle,
  }
});