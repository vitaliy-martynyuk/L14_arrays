const string1 = "Hello";
const string2 = "my";
const string3 = "name";
const string4 = "is";
const string5 = "Vitaliy";

const arr1 = ["Vitaliy", "Sergii", "Bohdan", "Lina"];
const arr2 = Array.from(arr1);

console.log(arr1);
arr1[100] = "Lina";
console.log(arr1[100]);

console.log(arr2);
arr2.push("Lina");
console.log(arr2);

const arr3 = new Array(1, 2, 3, 4, 5, 6);

const stack = new Array(10).fill(10);
console.log(stack);
stack.unshift("a");
console.log(stack);
stack.shift();
console.log(stack);

console.log("-------------");

const queue = new Array(10).fill(10);
console.log(queue);
queue.push("a");
console.log(queue);
queue.pop();
console.log(queue);

console.log("-------------");

const forIArray = new Array(10);

for (let i = 0; i < forIArray.length; i = i + 1) {
  forIArray[i] = Math.floor(Math.random() * 10);
}

console.log("forIArray: ", forIArray);

console.log("-------------");

const forOfArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let dfsgsdfg of forOfArray) {
  dfsgsdfg = dfsgsdfg + 1;
  console.log(dfsgsdfg);
}

console.log("forOfArray: ", forOfArray);

console.log("-------------");

const methodsArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const resultForEach = methodsArray.forEach((item) => {
  console.log(item + 100);

  return item + 100;
});

console.log(resultForEach);

console.log("-------------");

const resultMap = methodsArray.map((vitaliy) => {
  console.log(vitaliy + 100);

  return vitaliy + 100;
});

console.log(resultMap, methodsArray);
