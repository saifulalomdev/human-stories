import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import Header from '@/components/ui/header';
import Label from '@/components/ui/label';
import Title from '@/components/ui/title';
import Subtitle from '@/components/ui/subtitle';
import BrandFooter from '@/components/ui/brand-footer';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Form from '@/components/ui/form';
import KeyboardWrapper from '@/components/ui/keyboard-wrapper';
import Divider from '@/components/ui/divider';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  return (
    <KeyboardWrapper>

      {/* Back Button for Navigation */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color={Theme.colors.ink} />
        <Text style={styles.backText}>RETURN</Text>
      </TouchableOpacity>

      <Header>
        <Label> Account Recovery</Label>
        <Title>Lost the Key?</Title>
        <Subtitle>
          Enter the email associated with your pen name. We will send a
          unique recovery link to your inbox.
        </Subtitle>
      </Header>

      <Form>
        <Input
          label='RECOVERY EMAIL'
          placeholder="yourname@humanstories.app"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Button>SEND RECOVERY LINK</Button>
        <Divider>OR</Divider>
        <BrandFooter >NEED ASSISTANCE?{"\n"}SUPPORT@HUMANSTORIES.APP</BrandFooter>
      </Form>
    </KeyboardWrapper>
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
    color: Theme.colors.accentGold,
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