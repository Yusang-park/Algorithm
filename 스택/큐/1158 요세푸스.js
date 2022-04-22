function solve(n, k) {
  let arr = Array.from({ length: n }, (v, k) => k + 1);
  let res = "<";
  let lastIndex = k - 1;

  while (arr.length > 0) {
    res += arr.splice(lastIndex, 1) + ", ";
    lastIndex += k - 1;
    lastIndex = lastIndex % arr.length;
  }
  console.log(res.slice(0, -2) + ">");
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");
  let [n, k] = input[0].split(" ");
  solve(n, k);
}

input();
