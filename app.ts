// Not good to do, JUST FOR EXAMPLE

// const person: {
//   name: string;
//   age: number;
// }

// TS will automatically assign the first TYPE as Default in the future
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Elvis",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
// - .push() breaks the TYPE rule

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map() => will not work because "hobby" is a "String Type"
}
