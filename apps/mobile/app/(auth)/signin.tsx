import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Branding / Icon */}
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Ionicons name="key-outline" size={24} color={Theme.colors.accent} />
          </View>
          <Text style={styles.label}>Welcome Back</Text>
          <Text style={styles.title}>Enter the Sanctuary</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>IDENTIFICATION (EMAIL)</Text>
            <TextInput 
              style={styles.input}
              placeholder="you@humanstories.app"
              placeholderTextColor={Theme.colors.inkSubtle}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.inputLabel}>SECRET KEY (PASSWORD)</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}>FORGOT?</Text>
              </TouchableOpacity>
            </View>
            <TextInput 
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={Theme.colors.inkSubtle}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Primary Action */}
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          {/* Divider with Text */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* Switch to Signup */}
          <TouchableOpacity style={styles.secondaryAction}>
            <Text style={styles.secondaryText}>
              New to the platform? <Text style={styles.accentLink}>Request Access</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLegal}>VERIFIED SECURE / 2026</Text>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContent: {
    paddingHorizontal: Theme.spacing.gutter,
    paddingTop: 100, // Deep top padding for "Luxury" focus
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Theme.colors.accentLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 3,
    color: Theme.colors.inkFaded,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: Theme.fonts.title,
    fontSize: 32,
    color: Theme.colors.ink,
    marginTop: 8,
    textAlign: 'center',
  },
  form: {
    gap: 30,
  },
  inputGroup: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
    paddingBottom: 10,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    letterSpacing: 1,
    color: Theme.colors.inkSubtle,
    marginBottom: 6,
  },
  forgotText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    color: Theme.colors.accentGold,
    letterSpacing: 1,
  },
  input: {
    fontFamily: Theme.fonts.body,
    fontSize: 18,
    color: Theme.colors.ink,
  },
  primaryButton: {
    backgroundColor: Theme.colors.ink, // Black button for Sign In (Subtle difference from Signup)
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontFamily: Theme.fonts.mono,
    color: Theme.colors.background,
    fontSize: 14,
    letterSpacing: 3,
  },
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
  secondaryAction: {
    alignItems: 'center',
  },
  secondaryText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 11,
    color: Theme.colors.inkFaded,
  },
  accentLink: {
    color: Theme.colors.accent,
    fontWeight: '700',
  },
  footer: {
    marginTop: 80,
    alignItems: 'center',
  },
  footerLegal: {
    fontFamily: Theme.fonts.mono,
    fontSize: 8,
    letterSpacing: 4,
    color: Theme.colors.border,
  }
});