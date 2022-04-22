function solve(n, table, dp) {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      let value = table[y][x];
      if (value === 0) continue;
      if (y + value < n) {
        dp[y + value][x] += BigInt(dp[y][x]);
      }
      if (x + value < n) {
        dp[y][x + value] += BigInt(dp[y][x]);
      }
    }
  }
}

function input() {
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const n = +input.shift();
  const table = input.map((e) => e.split(" ").map((e) => +e));

  let dp = new Array(n).fill([]).map((x) => new Array(n).fill(BigInt(0)));

  dp[0][0] = 1;

  solve(n, table, dp);
  console.log(dp[n - 1][n - 1].toString());
}

input();
