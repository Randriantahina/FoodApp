import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Ionicons
          name="person-add-outline"
          size={80}
          color={Colors.primary}
          style={styles.logo}
        />
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>
          For this demo, user creation is disabled. Please use the pre-defined
          credentials to explore the app.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Email:</Text> user@geminifood.com
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Password:</Text> password123
          </Text>
        </View>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkText}>
              Already have an account?{' '}
              <Text style={styles.linkTextBold}>Login</Text>
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 40,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: Colors.grey,
    fontSize: 14,
  },
  linkTextBold: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
