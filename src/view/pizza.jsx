import React from 'react';
import pizzaFlavors from "../data/pizza-data";

const PizzaPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Pizza Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pizzaFlavors.map((pizza, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:scale-105 transition-all duration-300"
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pizza.name}</h3>
              <p className="text-green-600 font-bold text-lg mt-2">
                ${pizza.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaPage;
