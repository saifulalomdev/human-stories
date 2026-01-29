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
import { Link } from 'expo-router';
import KeyboardWrapper from '@/components/ui/keyboard-wrapper';
import BrandFooter from '@/components/ui/brand-footer';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardWrapper>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="key-outline" size={24} color={Theme.colors.accent} />
        </View>
        <Text style={styles.label}>Welcome Back</Text>
        <Text style={styles.title}>Enter the Sanctuary</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
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

        {/* Switch to Signup */}
        <Link href="/signup" asChild>
          <TouchableOpacity style={styles.secondaryAction}>
            <Text style={styles.secondaryText}>
              New to the community?{' '}
              <Text style={styles.accentLink}>Join HumanStories</Text>
            </Text>
          </TouchableOpacity>
        </Link>

      </View>

      <BrandFooter> VERIFIED SECURE / {new Date().getFullYear()}</BrandFooter>
    </KeyboardWrapper>
  );
}

const styles = StyleSheet.create({
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
  }
});