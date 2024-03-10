import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";



const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals!");
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMeals();
  }, []); // Empty dependency array to run the effect only once

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
