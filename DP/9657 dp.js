// let input = require("fs").readFileSync("testcase.txt").toString().split("\n");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let dp = [-1, 1, 0, 1, 1, 1];
let n = +input[0];

//dp[i-s] = 0 => dp[i] = 1
//dp[i-s] = 1 => dp[i] = 0

for (let i = 6; i < n + 1; i++) {
  dp.push(0);
  if (dp[i - 1] == 0 || dp[i - 3] == 0 || dp[i - 4] == 0) {
    dp[i] = 1;
  }
}

console.log(dp[n] == 1 ? "SK" : "CY");
