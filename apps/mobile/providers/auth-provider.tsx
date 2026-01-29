import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useSegments } from 'expo-router';

interface AuthContextType {
  user: string | null;
  isLoading: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // 1. Check for session on mount
  useEffect(() => {
    const loadSession = async () => {
      const savedUser = await AsyncStorage.getItem('user_session');
      if (savedUser) setUser(savedUser);
      setIsLoading(false);
    };
    loadSession();
  }, []);

  // 2. Navigation Guard logic
  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!user) {
      if (!inAuthGroup) {
        router.replace('/(auth)/signin');
      }
    } else if (user && inAuthGroup) {
      router.replace('/');
    }
  }, [user, isLoading, segments]);

  const signIn = async (token: string) => {
    await AsyncStorage.setItem('user_session', token);
    setUser(token);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('user_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};