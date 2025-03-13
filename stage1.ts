/**
 * 🚪 Stage 1: The Locked Gate
 * Solve a **Type Mismatch issue** to open the gate.
 */

function unlockGate(code: number) {
  if (typeof code === "number") {
    // ❌ Type mismatch: string used instead of number
    console.log("Gate Unlocked!");
  } else {
    console.log("Access Denied!");
  }
}

unlockGate(Math.random());
