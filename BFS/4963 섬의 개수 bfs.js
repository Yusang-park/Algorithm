function solve(w, h, table) {
  let route = [];
  let result = 0;
  let move = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  for (let y = 0; y < h; y++) {
    //1. loop table
    for (let x = 0; x < w; x++) {
      if (table[y][x] == 1) {
        //condition : found island
        let queue = [];
        result += 1;
        table[y][x] = 0;
        let tx = x;
        let ty = y;
        let dx, dy;
        do {
          for (let k = 0; k < move.length; k++) {
            //2. find close avilable element
            dx = tx + move[k][0];
            dy = ty + move[k][1];
            if (dx > -1 && dy > -1 && dx < w && dy < h && table[dy][dx] === 1) {
              //condition : inside the table
              queue.push([dx, dy]);
              table[dy][dx] = 0;
            }
          }
          if (queue.length > 0) [tx, ty] = queue.shift();
          else break;
        } while (true);
      }
    }
  }
  return result;
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  for (let i = 0; i < input.length; i++) {
    let table = [];
    let [w, h] = input[i].split(" ").map((e) => Number(e));
    if (w !== 0 && h !== 0) {
      for (let j = 0; j < h; j++) {
        i += 1;
        table.push(input[i].split(" ").map((e) => Number(e)));
      }

      console.log(solve(w, h, table));
    }
  }
}

input();
