import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const InitialLayout = () => {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inTabsGroup = segments[0] === '(main)';

    // Redirect user to tabs if they are logged in and not in the tabs group
    if (user && !inTabsGroup) {
      router.replace('/(main)');
    }
    // Redirect user to login if they are not logged in and trying to access tabs
    else if (!user && inTabsGroup) {
      router.replace('/(auth)/login');
    }
    // Also handle the case where the user is not logged in and is at the root
    else if (!user && !inTabsGroup) {
      router.replace('/(auth)/login');
    }
  }, [user, isLoading, segments]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
});
