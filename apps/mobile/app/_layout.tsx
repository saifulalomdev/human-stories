import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '@/constants/theme';
import { AuthProvider } from '@/providers/auth-provider';
import { ExtendedStackNavigationOptions } from 'expo-router/build/layouts/StackClient';

const options: ExtendedStackNavigationOptions = {
  headerShown: false,
  animation: "none",
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} style={styles.container}>
          <Stack>
            <Stack.Screen name="(tabs)" options={options} />
            <Stack.Screen name="(auth)/signin" options={options} />
            <Stack.Screen name="(auth)/signup" options={options} />
            <Stack.Screen name="(auth)/otp" options={options} />
            <Stack.Screen name="(auth)/forgot" options={options} />
          </Stack>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});
