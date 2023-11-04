//array - hold multiple values.
const fruits = ["apple","banana","cherry","data"]
console.log(fruits[0])  
fruits[1] = "kiwi";
console.log(fruits)
console.log(fruits.push("grape"));
console.log(fruits.pop());
console.log(fruits.length);
console.log(fruits.indexOf("kiwi"));
console.log(fruits.slice(1,3));
for(const fruit of fruits){
    console.log(fruit);
}