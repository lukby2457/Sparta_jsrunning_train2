//해당 문제를 forEach로 변경하여 풀어주세요
1. 
let arr=  [10, 20, 30];
// 해당 로직을 작성하세요  
let newArr = [];
arr.forEach((num) => {
  num = num * 10;
  newArr.push(num);
});
// 결과 값: [100, 200, 300] 출력해주세요 
console.log(newArr); // [ 100, 200, 300 ]

2. 
arr = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
newArr = [];
arr.forEach((num) => {
  if(num % 5 === 0) {
    newArr.push(num);
  }
});

// 결과값 [10]
console.log(newArr); // [ 10 ]