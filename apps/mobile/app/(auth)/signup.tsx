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

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.label}>Begin Your Journey</Text>
          <Text style={styles.title}>Join the Narrative</Text>
          <Text style={styles.subtitle}>
            Create your space in the sanctuary of human thought. 
            No noise, just your voice.
          </Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <TextInput 
              style={styles.input}
              placeholder="e.g. Sabbir Ahmed"
              placeholderTextColor={Theme.colors.inkSubtle}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
            <TextInput 
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor={Theme.colors.inkSubtle}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <TextInput 
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={Theme.colors.inkSubtle}
              secureTextEntry
            />
          </View>

          {/* Agreement Text */}
          <Text style={styles.agreementText}>
            By signing up, you agree to our <Text style={styles.link}>Manifesto</Text> and 
            our commitment to <Text style={styles.link}>Human Privacy</Text>.
          </Text>

          {/* Action Button */}
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          {/* Secondary Action */}
          <TouchableOpacity style={styles.secondaryAction}>
            <Text style={styles.secondaryText}>
              Already have an account? <Text style={{ color: Theme.colors.accent }}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>HUMANSTORIES.APP</Text>
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
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
  },
  label: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 2,
    color: Theme.colors.accent,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  title: {
    fontFamily: Theme.fonts.title,
    fontSize: 40,
    color: Theme.colors.ink,
    letterSpacing: -1,
  },
  subtitle: {
    fontFamily: Theme.fonts.body,
    fontSize: 16,
    lineHeight: 24,
    color: Theme.colors.inkFaded,
    marginTop: 12,
  },
  form: {
    gap: 25,
  },
  inputGroup: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
    paddingBottom: 8,
  },
  inputLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    letterSpacing: 1.5,
    color: Theme.colors.inkSubtle,
    marginBottom: 4,
  },
  input: {
    fontFamily: Theme.fonts.body,
    fontSize: 18,
    color: Theme.colors.ink,
    paddingVertical: 4,
  },
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
  primaryButton: {
    backgroundColor: Theme.colors.accent, // Oxblood Red
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // Note: No rounded corners for that 'Industrial/Editorial' look
  },
  buttonText: {
    fontFamily: Theme.fonts.mono,
    color: Theme.colors.background,
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  secondaryAction: {
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 11,
    color: Theme.colors.inkFaded,
  },
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
  footerBrand: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    letterSpacing: 3,
    color: Theme.colors.border,
  }
});