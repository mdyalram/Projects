// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// };


function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
};

let firstName = "Michael";
let lastName = "Dyalram";

let favoriteNumber = 42;

let instructor = {
    firstname: "Colt",
    [favoriteNumber]: "That is my favorite!"
};


function createAnimal(species, verb, noise){
    return {
        species,
        [noise](){
            return noise;
        }
    }
};