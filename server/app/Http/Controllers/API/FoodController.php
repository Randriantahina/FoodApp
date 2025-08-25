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
        return Food::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Food $food)
    {
        return $food;
    }
}