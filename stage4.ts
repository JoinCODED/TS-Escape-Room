/**
 * 🔄 Stage 4: The Temporal Rift
 * Resolve asynchronous code issues to stabilize time.
 */

async function fixRift() {
    return new Promise((resolve) => {
            setTimeout(() => {
            resolve("Rift Stabilized!");
        }, 2000);
    });
}

async function fetchValue() {
    const result = await fixRift()
    console.log(result);
}
  // ❌ Problem: This will log `undefined`
fetchValue();