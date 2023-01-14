// Not good to do, JUST FOR EXAMPLE

// const person: {
//   name: string;
//   age: number;
// }

// TS will automatically assign the first TYPE as Default in the future

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Elvis",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// - .push() breaks the TYPE rule

// Creating enum
enum Role {
  // We can assign label manually "numbers will go ++ automatically"
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Elvis",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map() => will not work because "hobby" is a "String Type"
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
