import { useState } from "react";

export default function Test() {
  const [query, setQuery] = useState("");
  const [foodInfo, setFoodInfo] = useState(null);

  const searchFood = async () => {
    const res = await fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`);
    const data = await res.json();

    if (data.status === 1) {
      const product = data.product;
      setFoodInfo({
        name: product.product_name,
        calories: product.nutriments["energy-kcal_100g"],
        protein: product.nutriments.proteins_100g,
        fat: product.nutriments.fat_100g,
        carbs: product.nutriments.carbohydrates_100g,
      });
    } else {
      setFoodInfo(null);
      alert("Product not found");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Open Food Facts Tracker 🔍</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food name (e.g. apple)"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={searchFood}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      {foodInfo && (
        <div className="p-4 border rounded shadow space-y-2 bg-gray-50">
          <h2 className="text-xl font-semibold">{foodInfo.name}</h2>
          <p>Calories: {foodInfo.calories || "N/A"} kcal</p>
          <p>Protein: {foodInfo.protein || "N/A"} g</p>
          <p>Fat: {foodInfo.fat || "N/A"} g</p>
          <p>Carbs: {foodInfo.carbs || "N/A"} g</p>
        </div>
      )}
    </div>
  );
}
