/**
 * 
 * 🛠️ Stage 2: The Missing Blueprint
 * Fix missing types and interfaces to restore the plans.
 */

interface Blueprint {
    name: string;
    materials: any[]
}

function createBlueprint(blueprint: Blueprint) {  // ❌ No type specified
    console.log(`Blueprint for ${blueprint.name} is ready!`);
}

createBlueprint({ name: "Bridge", materials: ["Wood", "Stone"] });
