function solve(w, h, table) {
  let queue = [];
  let move = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    let [x, y, step] = queue.shift();

    for (let k = 0; k < move.length; k++) {
      //1. find close avilable route
      dx = x + move[k][0];
      dy = y + move[k][1];
      if (dx > -1 && dy > -1 && dx < w && dy < h && table[dy][dx] === 1) {
        //condition : inside the table
        queue.push([dx, dy, step + 1]);
        //once specific queue reach position, other queues that reach this position are slower that specific queue;
        table[dy][dx] = 0;
        if (dx === w - 1 && dy === h - 1) {
          //Clear Track
          return step + 1;
        }
      }
    }
  }
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  //warning ! reverse
  let [h, w] = input[0].split(" ").map((e) => Number(e));
  let table = [];

  for (let y = 1; y < h + 1; y++) {
    table.push(input[y].split("").map((e) => Number(e)));
  }

  console.log(solve(w, h, table));
}

input();
