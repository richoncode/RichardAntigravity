# SlushMaster5000 Implementation Plan

## Goal Description
Build a "SlushMaster5000" web application to help personal slush machine owners create perfect slushies. The app will feature a "Slushometer" to calculate sugar/alcohol ratios and a recipe database.

## User Review Required
> [!IMPORTANT]
> Please review the [Specification](spec.md) for the detailed feature list and research findings.

## Proposed Changes

### Project Initialization
#### [NEW] [SlushMaster5000](file:///Users/richardbailey/RichardAntigravity/RichardAntigravity/SlushMaster5000)
- Initialize new Vite + React project.
- Install Tailwind CSS.
- Configure project structure (components, utils, data).

### Core Features

#### [NEW] [src/utils/slushCalculator.js](file:///Users/richardbailey/RichardAntigravity/RichardAntigravity/SlushMaster5000/src/utils/slushCalculator.js)
- Implement `calculateSlushiness(volume, sugar, alcohol)` function.
- Logic to determine Brix (target 13-15%) and ABV (target < 8-10%).
- Return status: "Perfect", "Too Icy", "Too Soft/Runny".

#### [NEW] [src/components/Slushometer.jsx](file:///Users/richardbailey/RichardAntigravity/RichardAntigravity/SlushMaster5000/src/components/Slushometer.jsx)
- UI for inputting ingredients.
- Visual gauge for Brix and ABV.
- Recommendations display.

#### [NEW] [src/data/recipes.js](file:///Users/richardbailey/RichardAntigravity/RichardAntigravity/SlushMaster5000/src/data/recipes.js)
- Static JSON array of initial recipes (Cola, Margarita, etc.) based on research.

#### [NEW] [src/App.jsx](file:///Users/richardbailey/RichardAntigravity/RichardAntigravity/SlushMaster5000/src/App.jsx)
- Main layout with navigation.
- Routing between Home, Calculator, and Recipe List.

## Verification Plan

### Automated Tests
- **Unit Tests**: Create `src/utils/slushCalculator.test.js` (using Vitest) to verify the calculator logic against known good/bad ratios.
    - Test case: 1L Coke (108g sugar) -> ~10% Brix (Too low? Needs sugar).
    - Test case: Margarita (4oz Tequila, 20oz Mix) -> Check ABV.

### Manual Verification
- **Browser Preview**:
    - Launch app with `npm run dev`.
    - Verify "Slushometer" inputs update the gauge correctly.
    - Check Recipe List rendering.
    - Verify responsive design on mobile view.
