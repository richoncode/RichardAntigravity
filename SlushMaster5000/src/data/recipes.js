export const recipes = [
    {
        id: 1,
        name: "Classic Cola Slush",
        category: "Classic",
        description: "The timeless classic. Simple and refreshing.",
        ingredients: [
            { name: "Cola", amount: "1 Liter", note: "Do not use Diet unless adding thickener/allulose" }
        ],
        instructions: "Pour soda into the machine. Wait 30 mins.",
        machineSetting: "Slush",
        tags: ["Easy", "Kid Friendly"]
    },
    {
        id: 2,
        name: "Blue Raspberry",
        category: "Classic",
        description: "The movie theater favorite.",
        ingredients: [
            { name: "Blue Raspberry Syrup", amount: "1 part" },
            { name: "Water", amount: "5 parts" }
        ],
        instructions: "Mix syrup and water. Pour into machine.",
        machineSetting: "Slush",
        tags: ["Sweet", "Vibrant"]
    },
    {
        id: 3,
        name: "Frozen Margarita",
        category: "Spiked",
        description: "A crowd pleaser for parties.",
        ingredients: [
            { name: "Tequila", amount: "6 oz" },
            { name: "Lime Juice", amount: "2 oz" },
            { name: "Margarita Mix", amount: "20 oz" }
        ],
        instructions: "Combine all ingredients. Pour into machine.",
        machineSetting: "Spiked Slush",
        tags: ["Alcoholic", "Party"]
    },
    {
        id: 4,
        name: "Piña Colada",
        category: "Spiked",
        description: "Tropical vacation in a glass.",
        ingredients: [
            { name: "Pineapple Juice", amount: "750 ml" },
            { name: "Coconut Cream", amount: "400 ml" },
            { name: "Rum", amount: "Optional" }
        ],
        instructions: "Whisk coconut cream and juice together thoroughly.",
        machineSetting: "Frozen Cocktail",
        tags: ["Creamy", "Tropical"]
    },
    {
        id: 5,
        name: "Frozen Coffee",
        category: "Creamy",
        description: "Better than the coffee shop.",
        ingredients: [
            { name: "Cold Brew Coffee", amount: "3 cups" },
            { name: "Sweetened Condensed Milk", amount: "1/2 cup" },
            { name: "Milk", amount: "1 cup" }
        ],
        instructions: "Mix well. Adjust sweetness to taste before freezing.",
        machineSetting: "Frappé",
        tags: ["Caffeine", "Morning"]
    }
];
