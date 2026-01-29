import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  forgotPassword?: {
    label: string;
    href: Href;
  };
}

export default function Input({ label, error, secureTextEntry, forgotPassword, ...props }: InputProps) {
  // Local state to toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Determine if we should show the toggle icon
  const isPasswordField = secureTextEntry !== undefined;

  return (
    <View style={styles.container}>
      <View style={[styles.inputGroup, { borderColor: error ? Theme.colors.accent : Theme.colors.border }]}>
        <View style={styles.labelRow}>
          <Text style={[styles.inputLabel, { color: error ? Theme.colors.accent : Theme.colors.border }]}>{label}</Text>

          {forgotPassword && (
            <Link href={forgotPassword.href} asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={[styles.inputLabel, styles.forgotText]}>
                  {forgotPassword.label}
                </Text>
              </TouchableOpacity>
            </Link>
          )}
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholderTextColor={Theme.colors.inkSubtle}
            selectionColor={Theme.colors.accent}
            secureTextEntry={isPasswordField ? !isPasswordVisible : false}
            {...props}
          />

          {isPasswordField && (
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.iconContainer}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Easier to tap
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={Theme.colors.inkSubtle}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputGroup: {
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  inputLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 1.5,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  forgotText: {
    fontFamily: Theme.fonts.mono,
    color: Theme.colors.accent,
    letterSpacing: 1,
    fontWeight: "700"
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: Theme.fonts.body,
    fontSize: 18,
    color: Theme.colors.ink,
    paddingVertical: 4,
    height: 32
  },
  iconContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  errorText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    color: Theme.colors.accent,
    marginTop: 6,
    letterSpacing: 0.5,
  }
});