function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.splice(arr[arr.length - 1 - i], 0, arr.length - i);
  }
  return res.join(" ");
}

function input() {
  const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "testcase.txt")
    .toString()
    .trim()
    .split("\n");

  let arr = input[1].split(" ").map((e) => Number(e));

  console.log(solve(arr));
}

input();
