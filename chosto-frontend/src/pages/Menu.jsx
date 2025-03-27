import React from "react";

const menuData = [
  {
    category: "Chosto",
    description: "Juicy strawberries filled with rich milky chocolate for a delightful treat.",
    items: [
      { name: "Milk Chocolate", price: 199 },
      { name: "White Chocolate", price: 249 },
      { name: "Twin Chocolate", price: 229 },
    ],
  },
  {
    category: "Chosto Fruit Barbecue",
    description: "Juicy fruits on a stick, dressed in chocolate magic.",
    items: [
      { name: "Milk Chocolate", price: 139 },
      { name: "White Chocolate", price: 159 },
      { name: "Twin Chocolate", price: 149 },
    ],
  },
  {
    category: "Chosto Fruit Bowl",
    description: "A bowl of freshness, a drizzle of chocolate bliss!",
    items: [
      { name: "Mini Softy Fruit Bowl", price: 199 },
      { name: "Milk Chocolate", price: 229 },
      { name: "White Chocolate", price: 279 },
      { name: "Twin Chocolate", price: 249 },
    ],
  },
  {
    category: "Fruit Milkshakes",
    description: "Fresh fruit blended to creamy perfection.",
    items: [
      { name: "Banana", price: 129 },
      { name: "Strawberry", price: 149 },
      { name: "Mango (Seasonal)", price: 149 },
      { name: "Custard Apple (Seasonal)", price: 149 },
      { name: "Apple", price: 159 },
      { name: "Dry Fruit Banana", price: 159 },
      { name: "Dry Fruit Mix", price: 219 },
    ],
  },
  {
    category: "Waffles",
    description: "Crispy and delicious, topped your way.",
    items: [
      { name: "Chocolate", price: 149 },
      { name: "Twin Chocolate", price: 159 },
      { name: "KitKat", price: 159 },
      { name: "Nutella KitKat", price: 169 },
      { name: "Naked Nutella", price: 179 },
      { name: "Lotus Biscoff", price: 199 },
      { name: "Nutella Ferrero Rocher", price: 249 },
    ],
  },
  {
    category: "Add-ons",
    description: "",
    items: [
      { name: "Ice Cream", price: 39 },
      { name: "Choco Chips (Dark or White)", price: 29 },
      { name: "Milk Chocolate", price: 49 },
      { name: "White Chocolate", price: 69 },
    ],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white font-sans">
      <h1 className="text-5xl text-center font-extrabold text-chostoPink drop-shadow-sm mb-12">
        🍨 Chosto Menu
      </h1>

      <div className="space-y-12 max-w-4xl mx-auto">
        {menuData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold text-chostoCream">{section.category}</h2>
            {section.description && (
              <p className="text-sm italic text-chostoCream mb-3">{section.description}</p>
            )}

            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b border-chostoPink pb-1"
                >
                  <span className="text-white">{item.name}</span>
                  <span className="text-chostoPink font-semibold">₹ {item.price}/-</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
