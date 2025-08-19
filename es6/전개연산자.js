// 배열 복사
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]

// 배열 병합
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

//함수 인자 전달
function sum(x, y, z) {
    return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

//객체 복사
const obj = { a: 1, b: 2 };
const copy2 = { ...obj };
console.log(copy2); // { a: 1, b: 2 }

//객체 병합
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const merged2 = { ...o1, ...o2 };
console.log(merged2); // { a: 1, b: 3, c: 4 }