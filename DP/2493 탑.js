function solve(n, arr) {
  let result = new Array(arr.length).fill(0);

  for (let i = 1; i < arr.length; i++) {
    let p = i;
    while (arr[i] > arr[p - 1] && p !== -1) {
      p = result[p - 1];
    }
    result[i] = p;
  }

  return result.join(" ");
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map((e) => parseInt(e));

  console.log(solve(n, arr));
}

input();

// 6 9 5 7 4
