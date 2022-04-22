function solve(arr) {
  let queue = [];
  let answer = "";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].includes("push")) {
      queue.push(arr[i].split(" ")[1]);
    } else if (arr[i].includes("pop")) {
      answer += `${queue.length > 0 ? queue.pop() : -1}\n`;
    } else if (arr[i].includes("size")) {
      answer += `${queue.length}\n`;
    } else if (arr[i].includes("empty")) {
      answer += `${queue.length === 0 ? 1 : 0}\n`;
    } else if (arr[i].includes("top")) {
      answer += `${queue.length > 0 ? queue[queue.length - 1] : -1}\n`;
    }
  }

  console.log(answer);
}

function input() {
  const input = require("fs")
    .readFileSync("/dev/stdin.txt")
    .toString()
    .trim()
    .split("\n");

  solve(input);
}

input();
