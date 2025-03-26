import React from "react";
import Logo from "../assets/chosto-logo.png";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <img src={Logo} alt="Chosto Logo" className="w-2/3 md:w-1/3 animate-pulse" />
      <h1 className="text-chostoPink text-4xl mt-6 font-bold">Welcome to Chosto 🍫🍓</h1>
      <p className="text-chostoCream mt-2 text-center px-6">
        Hyderabad’s favorite dessert truck, blending chocolate and strawberry magic daily.
      </p>
    </div>
  );
}
