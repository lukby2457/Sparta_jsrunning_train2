// 1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [ 10, 2, 3 ]
/*
  arr2의 0번 인덱스를 10으로 변경하였으나
  arr2는 얕은 복사로 인해 arr1과 같은 배열 주소를 가지고 있는 배열이다.
  그래서 arr2를 변경해도 arr1에 그대로 반영되어서
  arr1도 [10, 2, 3] 배열을 출력하게 된다
*/
console.log(arr1 === arr2); // true
/*
  arr1과 arr2는 얕은 복사로 인하여 같은 배열 주소를 참조하고 있다
  그래서 같은 주소를 비교하는 것이므로 true가 나오게 된다
*/



// 2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1;

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;

/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }