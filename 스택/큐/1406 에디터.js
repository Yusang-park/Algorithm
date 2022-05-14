function solve(len, lStack) {}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  let lStack = input[0].split("");
  let len = parseInt(input[1]);

  solve(lStack, len);
}

input();
