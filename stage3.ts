/**
 * 📦 Stage 3: The Cursed Inventory
 * Overcome array and object manipulation errors to retrieve supplies.
 */
type Inventory = Record<string, string>;

const inventory: Inventory = {};
const addItem = (itemName: string) => {
  const id = crypto.randomUUID();
  inventory[id] = itemName;
};

addItem("Sword");
addItem("Shield");
addItem("Potion");
addItem("Helmet");
// ❌ Error: Cannot modify a readonly array
console.log(inventory);
