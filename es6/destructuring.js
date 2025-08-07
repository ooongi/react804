/**
 * DOC(Documentation)
 * 구조 분해 할당(Destructuring Assignment)
 * 객체 또는 배열의 값을 개별 변수로 쉽게 꺼내는 문법
 * https://codingand.notion.site/2322620edc19800fb5e2c0fb184a1762
 * 참고: Code Runner: ctrl alt n
 */

const arr = [1, 2, 3];
// [a,b,c] = [1,2,3]
// a=1, b=2, c=3이 되는 문법
const [a, b, c] = arr;

// console.log(arr[0]); // 1
// console.log(arr[1]); // 2
// console.log(arr[2]); // 3
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


// 기본값 설정, 값을 주면 기본값은 무시된다.
const [x, y, z = 100] = [10, 20, 30];
console.log("x=", x); // x=10
console.log("y=", y); // y=20
console.log("z=", z); // z=30


// 객체 구조 분해
const user = { _name: "홍길동", age: 25 };
const { _name, age } = user;
console.log(_name); // 홍길동
console.log(age); // 25


// 다른 변수 이름으로 할당 (별칭 사용)
const { _name: userName, age: userAge } = user;
console.log("userName =", userName); // 홍길동
console.log("userage =", userAge); // 25


// 기본값 설정
const { job = "개발자" } = user;
console.log(job); // 개발자


// 함수의 매개변수에서 구조 분해 (React에서 매우 자주 사용)
function PrintUser({ name2, age2 }) {
    console.log(`${name2}, ${age2}`);
}
const user2 = { name2: "Jane", age2: 22 };
PrintUser(user2);


// 중첩 구조 분해
const user3 = {
    name: "철수",
    address: {city: "서울", zip: "12345"}
};
const {address: { city , zip}} = user3;
console.log(city);
console.log(zip);
console.log(city,'(',zip,')');
console.log(city + '(' + zip + ')');
//$표현식
console.log(`${city}(${zip})`);



// 리액트: 동작 안함
// 구조 분해 할당
// const [변수, 함수] = useState(초깃값);
// 변수는 상태 값, 함수는 상태 변경 함수
// 함수 이름은 set변수명, 카멜 표기법으로 관례적으로 쓴다.
// const [count, setCount] = useState(0);


const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
}

handleChange();