let input = require("fs").readFileSync("testcase.txt").toString().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
trim(input);
let n = +input[0];

let dp = []; //이중배열
dp[0] = 0;
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i < n + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2;
}

console.log(dp[n] % 10007);

//dp[2][i] = dp[2][i-1] + dp[2][i-2] + dp[2][i-2]
