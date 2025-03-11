/** 
 * 🚪 Stage 1: The Locked Gate
 * Solve a **Type Mismatch issue** to open the gate.
 */

function unlockGate(code: number) {
    if (code === "1234") {  // ❌ Type mismatch: string used instead of number
        console.log("Gate Unlocked!");
    } else {
        console.log("Access Denied!");
    }
}

unlockGate(1234);
