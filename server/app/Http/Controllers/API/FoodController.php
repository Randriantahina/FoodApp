<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Food;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // On retourne la liste de tous les aliments, explicitement formatée en JSON.
        return response()->json(Food::all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Food $food)
    {
        // On retourne l'aliment spécifique en JSON.
        // Laravel se charge de le trouver par son ID grâce au "Route Model Binding".
        return response()->json($food);
    }
}