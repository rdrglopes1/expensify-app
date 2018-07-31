//
//object distructuring
//

// const person = {
//     name: 'Rodrigo',
//     age: 35,
//     location: {
//         city: 'Rio de Janeiro',
//         temp: 19
//     }
// };

// const {name: firstName = 'Anonimous', age} = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// console.log(`it's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const  { name: publisherName = 'Self-Published'} = book.publisher 

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensilvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Cofee (iced)', '$2.00', '$3.50', '$2.75'];
const [cofee, , medium] = item;
console.log(`A medium ${cofee} costs ${medium}`); 