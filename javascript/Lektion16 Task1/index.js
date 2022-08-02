
function sumInput(){
  const array = [];
  let count = 0;
}
for (let i = 0; i < Infinity; i++) {
  let num = +prompt('введите число',)
  if (!num) {
    break
  }
  array.push(num)
  array.sort((a, b) => a - b)
  array.forEach(item => {
    count = count + item
  })
  alert(count)
}


console.log(sumInput());