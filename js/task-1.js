// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// let arreyFinal = [];
// let arreyFinal1 = [];
// for (const a in book) {
//   arreyFinal.push(a);
//   arreyFinal1.push(book[a]);
// }
// console.log(arreyFinal);
// console.log(arreyFinal1);


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
console.log(keys);

for (let a of keys) {
  values.push(apartment[a]);
  console.log(values);
}
// console.log(keys);
// console.log(values);
// console.log(apartment[keys]);


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }