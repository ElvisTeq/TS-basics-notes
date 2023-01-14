// Not good to do, JUST FOR EXAMPLE
// const person: {
//   name: string;
//   age: number;
// }
// TS will automatically assign the first TYPE as Default in the future
var person = {
    name: "Elvis",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // hobby.map() => will not work because "hobby" is a "String Type"
}
