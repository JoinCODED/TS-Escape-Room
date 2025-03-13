/**
 * 🏆 Final Boss: The Type Guardian’s Riddle
 * Defeat the guardian by fixing class and inheritance problems.
 */

class Guardian {
  constructor(public name: string) {
    this.name = name;
  }

  speak() {
    console.log(`I am ${this.name}, the fortress guardian!`);
  }
}

class FireGuardian extends Guardian {
  static guardianType = "Fire";

  constructor(name: string) {
    super(name);
  }
}
class IceGuardian extends Guardian {
  static guardianType = "Ice";

  constructor(name: string) {
    super(name);
  }
}
class ThunderGuardian extends Guardian {
  static guardianType = "Thunder";

  constructor(name: string) {
    super(name);
  }
}

function createGuardian(
  type: "Fire" | "Ice" | "Thunder",
  name: string
): Guardian {
  switch (type) {
    case "Fire":
      return new FireGuardian(name);
    case "Ice":
      return new IceGuardian(name);
    case "Thunder":
      return new ThunderGuardian(name);
    default:
      throw new Error("Unknown Guardian Type");
  }
}

createGuardian("Fire", "Inferno");
console.log(`Type: ${IceGuardian.guardianType}`); // ❌ Error: Static properties cannot be accessed from instances
