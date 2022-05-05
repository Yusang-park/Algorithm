function solve(len, lStack) {
    let idx = 0;
    let number = +input[idx++];
    
    while (number--) {
        let num = +input[idx++];
        let arr = [...Array(num)].map(() => input[idx++]).sort();
        let len = 0;
        let result = "YES";
    
        for (let i = 0; i < num; i++) {
            if (arr[i].slice(0, len) === arr[i - 1]) {
                result = "NO";
                break;
            }
            len = arr[i].length;
        }
        console.log(result);
    }
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  let lStack = input[0].split("");
  let len = parseInt(input[1]);

  solve(lStack, len);
}

input();
