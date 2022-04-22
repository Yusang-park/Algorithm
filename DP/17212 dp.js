let input = require("fs").readFileSync("testcase.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0];

let dp = [0, 1, 1, 2, 2, 1, 2, 1];

for (let i = 8; i <= n; i++) {
  dp.push(Math.min(dp[i - 1], dp[i - 2], dp[i - 5], dp[i - 7]) + 1);
}
console.log(dp[n]);
