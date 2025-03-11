/**
 * 🏆 Final Boss: The Type Guardian’s Riddle
 * Defeat the guardian by fixing class and inheritance problems.
 */

class Guardian {
    constructor(public name: string) {}

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

const boss = new FireGuardian("Inferno");
console.log(`Type: ${boss.guardianType}`); // ❌ Error: Static properties cannot be accessed from instances
