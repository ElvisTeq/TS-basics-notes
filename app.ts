// Not good to do, JUST FOR EXAMPLE

// const person: {
//   name: string;
//   age: number;
// }

// TS will automatically assign the first TYPE as Default in the future
const person = {
  name: "Elvis",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map() => will not work because "hobby" is a "String Type"
}
