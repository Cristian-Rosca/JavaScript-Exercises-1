/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

// england = null;

// for (let i = 0; i < unitedKingdom.length; i++) {
//     if (unitedKingdom[i].name == "England") {
//         unitedKingdom[i].touristAttractions = ["London Eye", "Harry Potter Museum"];
//         england =  unitedKingdom[i]
//     }
// }
// console.log(england);


// Initial way
// for (let i = 0; i < unitedKingdom.length; i++) {
//     if (unitedKingdom[i].name == "England") {
//         unitedKingdom[i].touristAttractions = ["London Eye", "Harry Potter Museum"];
//         console.log(unitedKingdom[i]);
//     } 
// }





/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

// wales = null;

// for (let i = 0; i < unitedKingdom.length; i++) {
//     if (unitedKingdom[i].name == "Wales") {
//         unitedKingdom[i].capital = "Cardiff"
//         wales =  unitedKingdom[i]
//     }
// }

// console.log(wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

// northernIrelandKeys = null;

// for (let i = 0; i < unitedKingdom.length; i++) {
//     if (unitedKingdom[i].name == "Northern Ireland") {
//         northernIreland =  unitedKingdom[i]
//     }
// }

// northernIrelandKeys = Object.keys(northernIreland);

// console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

northernIreland = null;
scotland = null;
england = null;
wales = null;

for (let i = 0; i < unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "Northern Ireland") {
        northernIreland =  unitedKingdom[i]
    }
}

for (let i = 0; i < unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "Scotland") {
        scotland =  unitedKingdom[i]
    }
}

for (let i = 0; i < unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "Wales") {
        wales =  unitedKingdom[i]
    }
}

for (let i = 0; i < unitedKingdom.length; i++) {
    if (unitedKingdom[i].name == "England") {
        england =  unitedKingdom[i]
    }
}

if (scotland.population < northernIreland.population && scotland.population < england.population && scotland.population < wales.population) {
    console.log("Smallest population");
} else if
    (scotland.population > northernIreland.population && scotland.population > england.population && scotland.population > wales.population) {
        console.log("Largest population");
    }
else console.log("Population in the middle");


// Better way to write the above code
// if (scotland.population < (northernIreland.population || england.population || wales.population) {
//     console.log("Smallest population");
// }
