function solve() {}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  console.log(solve(input[0]));
}

input();
