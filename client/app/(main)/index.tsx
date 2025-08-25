import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import { RESTAURANTS } from '@/data/food';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24;

const categories = ['All', ...new Set(RESTAURANTS.map((r) => r.category))];

export default function HomeScreen() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRestaurants, setFilteredRestaurants] = useState(RESTAURANTS);

  useEffect(() => {
    let data = RESTAURANTS;
    // Filter by category
    if (selectedCategory !== 'All') {
      data = data.filter((r) => r.category === selectedCategory);
    }
    // Filter by search query
    if (searchQuery) {
      data = data.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredRestaurants(data);
  }, [searchQuery, selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>GeminiFood</Text>
          <Text style={styles.welcomeText}>Hello, {user?.name}!</Text>
        </View>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${user?.email}` }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color={Colors.grey}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.cardCategory}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.grey,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  categoryContainer: {
    paddingLeft: 16,
    marginBottom: 10,
  },
  categoryChip: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    color: Colors.grey,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: Colors.white,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: cardWidth,
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  cardCategory: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 4,
  },
});
