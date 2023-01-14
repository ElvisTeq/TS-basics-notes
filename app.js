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
var Role;
(function (Role) {
    // We can assign label manually "numbers will go ++ automatically"
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Elvis",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // hobby.map() => will not work because "hobby" is a "String Type"
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
