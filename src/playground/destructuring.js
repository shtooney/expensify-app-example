console.log('destructuring');

const person = {
    age: 20,
    location: {
        city: 'Boston',
        temp: 50
    }
};

//This is the same exact thing as lines 15 & 16
const {name = 'Anonymous', age} = person;

//const name = person.name;
//const age = person.age;

console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location

if(city && temperature){
    console.log(`It's ${temperature} degrees in ${temperature}`);
}

const book = {
    title: 'Ego Is The Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'        
    }
};

const {name: publisherName = 'Self Published'} = book.publisher;

console.log(publisherName); // Penguin if matches, else "self-published" 
// if no "name" key in line 29 (or anywhere else in 
// that part of the object, under publisher)

const address = ['1299 S Juniper Street', 'Philly', 'PA', '01201'];

const [, , state = 'New York'] = address; // NY if there is no 3rd item in array

//longer version
console.log(`You are in ${address[1]}, ${address[2]}`)
//newer version - easier to write
console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

console.log(`A medium Coffee (hot) costs $2.50`);

const [medium, , midcost] = item;

console.log(`A medium ${medium} costs ${midcost}`);
