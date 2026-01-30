import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Input from '@/components/ui/input';
import KeyboardWrapper from '@/components/ui/keyboard-wrapper';
import BrandFooter from '@/components/ui/brand-footer';
import AuthRedirect from '@/components/ui/auth-redirect';
import Header from '@/components/ui/header';
import Title from '@/components/ui/title';
import Label from '@/components/ui/label';
import Form from '@/components/ui/form';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardWrapper>
      <Header style={{ alignItems: "center" }}>
        <View style={styles.iconCircle}>
          <Ionicons name="key-outline" size={24} color={Theme.colors.accent} />
        </View>
        <Label>Welcome Back</Label>
        <Title>Enter the Sanctuary</Title>
      </Header>

      <Form>
        <Input
          label="Email"
          placeholder="you@humanstories.app"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          forgotPassword={{
            label: "Forgot?",
            href: "/forgot"
          }}
        />
        <Button>SIGN IN</Button>

        <Divider>OR</Divider>

        <AuthRedirect prompt='New to the community?' linkText='Join HumanStories' href="/signup" />
      </Form>

      <BrandFooter> VERIFIED SECURE / {new Date().getFullYear()}</BrandFooter>
    </KeyboardWrapper>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Theme.colors.accentLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
});