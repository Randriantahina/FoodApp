import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { RESTAURANTS } from '@/data/food';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const restaurant = RESTAURANTS.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Restaurant not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <Image source={{ uri: restaurant.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.category}>{restaurant.category}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color={Colors.accent} />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 5,
  },
  category: {
    fontSize: 18,
    color: Colors.grey,
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.grey,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGrey,
  },
  orderButton: {
    backgroundColor: Colors.primary,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  orderButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
