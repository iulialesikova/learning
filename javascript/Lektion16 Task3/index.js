
let arr = ['js', 'css', 'html'];
let firstElement = arr[0];
console.log(firstElement);


let arr2 = [0, 1, false, 2, undefined, '', 3, null];
let filterArr = arr2.filter(element => Boolean(element));
console.log(filterArr)

let arrays = [[1,2], [1,2,3], [1,2,3,4]];
for (let arr3 of arrays) {
  if (arr3.length > 3) {
  console.log(arr3);
}
}


