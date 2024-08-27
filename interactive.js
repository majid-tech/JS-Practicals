// function Person (name) {
//     this.name = name;
//     this.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }

function Cat (name, breed, color) {
    this.Name = name;
    this.Breed = breed;
    this.Color = color;
    this.hello = function () {
        console.log(`Hello, said ${this.name} the ${this.breed}.`)
    };
}

const cat = new Cat("Bertia", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");


// const band = {
//     name: "Essay",
//     nationality: "Ghana",
//     genre: "Hip",
//     members: 20,
//     formed: 2002,
//     split: false,
//     albums: [
//         {
//             name: "",
//         released: 2003
//         },
//         {
//             name: "",
//         released: 2004
//         }
//     ]
// };

// var bandInfo = `The ${band.name}, a national of ${band.nationality}, Focused on ${band.genre}, with ${band.members} number of members, established in the year ${band.formed}`;
