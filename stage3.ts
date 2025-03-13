/**
 * 📦 Stage 3: The Cursed Inventory
 * Overcome array and object manipulation errors to retrieve supplies.
 */
type Item = {
    id: number;
    invetory: string[];
};

const inventory: Item = {id: 1, invetory: ["Sword", "Shield", "Potion"]};
inventory.invetory.push("Helmet"); // ❌ Error: Cannot modify a readonly array
console.log(inventory);
