function solve(n, d, k, c, rail) {
  let pick = rail.slice(0, k);
  let answer = new Set([...pick, c]).size;

  for (let i = 1; i < n; i++) {
    let r = i + k - 1;
    let minus = 0;

    if (pick.includes(rail[r])) {
      minus += 1;
    }

    pick.push(rail[r]);
    pick.shift();

    if (!pick.includes(c)) {
      minus -= 1;
    }

    if (pick.length - minus > answer) {
      answer = pick.length - minus;
    }
  }
  return answer;
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  let [n, d, k, c] = input[0].split(" ").map((e) => Number(e));
  let rail = input
    .slice(1)
    .splice("\n")
    .map((e) => Number(e));
  rail = rail.concat(rail);

  console.log(solve(n, d, k, c, rail));
}

input();
