import React from "react";
import burgers from "../data/burger-data";

const BurgerList = () => {

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Burgers Menu</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {burgers.map((shawarma, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:scale-105 transition-all duration-300"
          >
            <img
              src={shawarma.src}
              alt={shawarma.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{shawarma.name}</h3>
              <p className="text-green-600 font-bold text-lg mt-2">
                ${shawarma.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerList;