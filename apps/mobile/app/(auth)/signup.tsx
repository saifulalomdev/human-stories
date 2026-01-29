import { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Input from '@/components/ui/input';
import KeyboardWrapper from '@/components/ui/keyboard-wrapper';
import Button from '@/components/ui/button';
import BrandFooter from '@/components/ui/brand-footer';
import AuthRedirect from '@/components/ui/auth-redirect';
import LegalAgreement from '@/components/ui/legal-agreement';
import Subtitle from '@/components/ui/subtitle';
import Title from '@/components/ui/title';
import Label from '@/components/ui/label';
import Header from '@/components/ui/header';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <KeyboardWrapper>
      <Header>
        <Label>Begin Your Journey</Label>
        <Title>Join the Narrative</Title>
        <Subtitle>
          Create your space in the sanctuary of human thought.
          No noise, just your voice.
        </Subtitle>
      </Header>

      {/* Form Fields */}
      <View style={styles.form}>
        <Input
          label='FULL NAME'
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
          error='somethin web gone'
        />

        <Input
          label='EMAIL ADDRESS'
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label='PASSWORD'
          placeholder="••••••••"
          secureTextEntry={false}
        />

        <LegalAgreement />
        <Button>CREATE ACCOUNT</Button>
        <AuthRedirect prompt='Already a part of HumanStories?' linkText='Sign In' href="/signin" />
      </View>
      <BrandFooter>HUMANSTORIES.APP</BrandFooter>
    </KeyboardWrapper>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 25,
  },
});