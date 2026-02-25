// 🟢 1️ ძებნა მასივში
// let phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];
// •	შეამოწმე Array.isArray(phones)
// •	მომხმარებლისგან მიიღე მოდელი prompt-ით
// •	გამოიყენე includes() და indexOf()
// •	დაბეჭდე არსებობს თუ არა და მისი ინდექსი

// let phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];

// console.log(Array.isArray(phones));
// let userModel = prompt("enter phone model:");

// let exists = phones.includes(userModel);
// let index = phones.indexOf(userModel);

// if (exists) {
//   console.log("model exists");
//   console.log("index: " + index);
// } else {
//   console.log("model doesn't exist");
// }

// ----------------------------------------------------------------

// 🟢 2 გაერთიანება
// let categories = [
//   ["Milk", "Cheese"],
//   ["Apple", "Banana"],
//   ["Water"]
// ];
// •	შექმენი ასლი structuredClone() -ით
// •	ორიგინალი მასივი გააერთიანე  - გამოიყენე flat()
// •	დაალაგე sort()
// •	შემდეგ reverse()
// •	დაბეჭდე ორიგინალი და ასლი

// let categories = [["Milk", "Cheese"], ["Apple", "Banana"], ["Water"]];

// let groceryCopy = structuredClone(categories);
// let allItems = categories.flat();

// allItems.sort();
// allItems.reverse();

// console.log("ორიგინალი: ", groceryCopy);
// console.log("ასლი: ", allItems);
