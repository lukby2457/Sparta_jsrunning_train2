const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul"
  }
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = student;

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = JSON.parse(JSON.stringify(student));
// console.log(deepCopy);


// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?", student === shallowCopy); // true
// console.log(student);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'javascript' ],
    address: { city: 'seoul' }
  }
*/
// console.log(shallowCopy);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'javascript' ],
    address: { city: 'seoul' }
  }
*/

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", student.address === shallowCopy.address); // true
// console.log(student.address); // { city: 'seoul' }
// console.log(shallowCopy.address); // { city: 'seoul' }

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", student === deepCopy); // false
// console.log(student);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'javascript' ],
    address: { city: 'seoul' }
  }
*/
// console.log(deepCopy);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'javascript' ],
    address: { city: 'seoul' }
  }
*/

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", student.address === deepCopy.address); // false
// console.log(student.address); // { city: 'seoul' }
// console.log(deepCopy.address); // { city: 'seoul' }


// 2. 동일한 student로 진행합니다. 

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
shallowCopy.skill[0] = "js";

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
deepCopy.address.city = 'busan';

// 결과 확인 
console.log("5. 원본 객체(student):"); 
console.log(student);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'js' ],
    address: { city: 'seoul' }
  }
*/
console.log("6. 얕은 복사된 객체(shallowCopy):"); 
console.log(shallowCopy);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'js' ],
    address: { city: 'seoul' }
  }
*/
console.log("7. 깊은 복사된 객체(deepCopy):");
console.log(deepCopy);
/*
  {
    name: 'yuno',
    age: '30',
    skill: [ 'javascript' ],
    address: { city: 'busan' }
  }
*/

/* 1~7번까지 출력값을 출력해보고 적어주세요
예 ) 1. true 
	... 
     5. {
	  name : ... ,
          agae : ... , 
	  skill : ...,
	  ....
        }
*/