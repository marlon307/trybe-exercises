let fruits = [3, 4, 10, 1, 12];
let result = 0;

for (let i = 0; i < fruits.length; i += 1) {
  result += fruits[i];
}

if (result > 15) {
  console.log(result);
} else {
  console.log('valor menor que 16');
}
