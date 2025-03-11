/**
 * 
 * 🛠️ Stage 2: The Missing Blueprint
 * Fix missing types and interfaces to restore the plans.
 */

function createBlueprint(blueprint) {  // ❌ No type specified
    console.log(`Blueprint for ${blueprint.name} is ready!`);
}

createBlueprint({ name: "Bridge", materials: ["Wood", "Stone"] });
