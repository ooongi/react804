function func(a, b, ...rest) {
    console.log(a); // 첫 번째 인자
    console.log(b); // 두 번째 인자
    console.log(rest); // 나머지 인자 배열
}

function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
