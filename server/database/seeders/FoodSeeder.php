<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Food;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $restaurants = [
            [
                'id' => '1',
                'name' => 'Spicy Heaven',
                'category' => 'Italian',
                'rating' => 4.5,
                'image' => 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop',
            ],
            [
                'id' => '2',
                'name' => 'Burger Queen',
                'category' => 'American',
                'rating' => 4.2,
                'image' => 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2799&auto=format&fit=crop',
            ],
            [
                'id' => '3',
                'name' => 'Sushi World',
                'category' => 'Japanese',
                'rating' => 4.8,
                'image' => 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2940&auto=format&fit=crop',
            ],
            [
                'id' => '4',
                'name' => 'Taco Fiesta',
                'category' => 'Mexican',
                'rating' => 4.6,
                'image' => 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2881&auto=format&fit=crop',
            ],
            [
                'id' => '5',
                'name' => 'Healthy Greens',
                'category' => 'Salad',
                'rating' => 4.9,
                'image' => 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2787&auto=format&fit=crop',
            ],
            [
                'id' => '6',
                'name' => 'Morning Brew',
                'category' => 'Breakfast',
                'rating' => 4.7,
                'image' => 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2940&auto=format&fit=crop',
            ],
        ];

        $foodItems = [
            [
                'id' => '1',
                'restaurantId' => '1',
                'name' => 'Classic Pepperoni',
                'description' => 'A classic pizza with pepperoni and cheese.',
                'price' => 12.99,
                'image' => 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2946&auto=format&fit=crop',
            ],
            [
                'id' => '2',
                'restaurantId' => '1',
                'name' => 'Margherita Pizza',
                'description' => 'Fresh tomatoes, mozzarella, and basil.',
                'price' => 10.99,
                'image' => 'https://images.unsplash.com/photo-1598021680942-8aa3b21f3666?q=80&w=2825&auto=format&fit=crop',
            ],
            [
                'id' => '3',
                'restaurantId' => '2',
                'name' => 'Cheeseburger',
                'description' => 'A juicy beef patty with cheese, lettuce, and tomato.',
                'price' => 8.99,
                'image' => 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=2864&auto=format&fit=crop',
            ],
            [
                'id' => '4',
                'restaurantId' => '3',
                'name' => 'California Roll',
                'description' => 'Crab, avocado, and cucumber wrapped in seaweed and rice.',
                'price' => 7.99,
                'image' => 'https://images.unsplash.com/photo-1611141654212-3abb1f5529aa?q=80&w=2834&auto=format&fit=crop',
            ],
        ];

        foreach ($foodItems as $item) {
            $restaurant = collect($restaurants)->firstWhere('id', $item['restaurantId']);

            Food::create([
                'name' => $item['name'],
                'description' => $item['description'],
                'price' => $item['price'],
                'image_url' => $item['image'],
                'category' => $restaurant['category'] ?? 'Unknown',
                'rating' => $restaurant['rating'] ?? 0.0,
            ]);
        }
    }
}