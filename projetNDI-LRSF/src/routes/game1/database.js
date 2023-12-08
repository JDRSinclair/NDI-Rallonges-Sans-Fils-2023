// database.js
const buildings = [
    {
      id: 1,
      name: "Barrage",
      cost: 100000,
      servicing: 10,
      place: 50,
      emission: 5,
      qualityLife: 80,
      sprit: "src/lib/images/barrage.png" 
    },
    {
      id: 2,
      name: "Usine à charbon",
      cost: 150000,
      servicing: 15,
      place: 30,
      emission: 8,
      qualityLife: 75,
      sprit: "charbon.png"
    },
    {
        id: 3,
        name: "Eolienne",
        cost: 100000,
        servicing: 10,
        place: 50,
        emission: 5,
        qualityLife: 80,
        sprit: "eolienne.png"
      },
      {
        id: 4,
        name: "Usine à gas",
        cost: 150000,
        servicing: 15,
        place: 30,
        emission: 8,
        qualityLife: 75,
        sprit: "gaz.png"
      },
      {
        id: 5,
        name: "Station géothermique",
        cost: 100000,
        servicing: 10,
        place: 50,
        emission: 5,
        qualityLife: 80,
        sprit: "geothermique.png"
      },
      {
        id: 6,
        name: "Panneau solaire",
        cost: 150000,
        servicing: 15,
        place: 30,
        emission: 8,
        qualityLife: 75,
        sprit: "panneauxsolaire.png"
      },
      {
        id: 7,
        name: "Usine à pétrole",
        cost: 100000,
        servicing: 10,
        place: 50,
        emission: 5,
        qualityLife: 80,
        sprit: "petrole.png"
      },
    // Ajoutez d'autres objets de bâtiment au besoin
  ];
  
  export default buildings;