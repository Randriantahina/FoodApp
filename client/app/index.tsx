import { ActivityIndicator, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function StartPage() {
  // The root layout will handle redirecting to the correct screen.
  // This screen is just a fallback while the initial auth check is happening.
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
      }}
    >
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}
