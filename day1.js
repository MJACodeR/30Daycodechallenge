//stack -> Primitive datatype stack copy milte hai
// Heap-> Non-Primitive  datatype heap mei original reference milte hai
// let myHomeName = "abhishek";
// let AnotherName = myHomeName;
// AnotherName = "MJ"
// console.log(AnotherName);
// console.log(myHomeName);

// JS-A1#2


//task1
/*  What is a variable. What should be kept in mind while naming a variable.
variable a store data.
a variable name can contain letters, numbers and underscore but it cannot start with a digit or special characters.
datatype
primitive data type => number,string,boolean,null,undefined,symbol. 
non primitive data type => object, array, function.  
*/

//task2
// let a = 12;
// let b = 12;
// let c = (a+b);
// console.log("sum of two numbers "+c);

//task3
// let a = 1;
// let b = 2;
// let c = 3;
// let d = (a *(b +  c) -(b*c))
// console.log(`${a} *${(b +  c)} -${(b*c)}= ${d}`);

//for loops
// for loop execute the block code as many times as it takes to satisfy the condition.

//JS-A1#3
//task4
// for(let i=1;i<=5;i++){
//     console.log(`EmployeeId::${i}`)
// }
//task5
// for(let i=1;i<=11;i++){
//     const cube = i ** 3
//     console.log(`number=${i}, cube=${cube}`);
// }

//task7
// let str = ''
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} ${(i+10)} ${(i+100)} ${(i+1000)}`)
// }

//task8-9 same 10 only find squares
// let num = 2
// for(let i =1;i<=num;i++){
//     console.log(`X${i}`)
// }

//task11
// let num = 3;
// let str = ""
// for(let i =1;i<=num;i++){
//     str = str + "A" + i;
//     console.log(`${str}`)
// }

//task12
// let num = 2;
// let str = 1;
// for(let i =1;i<=num;i++){
//     console.log(`${i}+${str+i}= ${i+str+i}`)
// }
//task13
// let num = 1;
// let str = "";
// let count = 1;
// for(let i =1;i<=num;i++){
// str += `XY${count++}${count++}`
// console.log(str)
// }

//task14
// let num = 5;
// let str = "";
// for(let i =1;i<=num;i++){
//   str +=`@`
//   console.log(`${i}${str}`)
// }

//task15
// let num = 5;
// let str = "";
// for(let i =1;i<=num;i++){
//   str +=`M`
//   console.log(`${str}+`)
// }

//task16
// let num = 3;
// for(let i =1;i<=num;i++){
//   console.log(`${i}*${num}=${i*num}`)
// }


//task17
///logic- You need to increment the value by 3 in each iteration
// let num = 4;
// let count = 1;
// for(let i =1;i<=num;i++){
//     count = count+3
//     console.log(`${i} => ${count}`)
// }

//task18
// let num = 4;
// for(let i =num;i>0;i--){
//     console.log(`${i}`)
// }

//*if loops
//task 4
// let m = 6
// let n = 8
// if(m>n){
//   console.log('Larger') 
// }
// else if(m=n){
// console.log('equal')
// }
// else{
//     console.log('small')
// }

//task5
// let n = 15;
// for(let i=2;i<=5;i++){
//     if (i%2==0) {
//         console.log(`${i}:NO`)
//     }
//     else{
//         console.log(`${i}:YES`)
//     }
// }


//task8
// let n = 10;
// let str = ''
// for(let i=1;i<=n;i++){
//     if (n%i==0) {
//         console.log(`${i}`)
//     }
// }

