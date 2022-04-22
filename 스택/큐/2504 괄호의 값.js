function solve(str) {
  let q = str.split("");
  let stack = []; //{value, score}
  let res = 0;

  while (q.length > 0) {
    let currentValue = q.shift();
    if ((currentValue === ")") | (currentValue === "]")) {
      //닫는 괄호 출현
      if (stack.length === 0) return 0;
      let { value, score } = stack.pop();
      if (
        !(currentValue === ")" && value === "(") &&
        !(currentValue === "]" && value === "[")
      ) {
        //잘못된 괄호라면
        return 0;
      } else {
        //제대로된 괄호라면 점수 추가 혹은 끝내기
        let additionalScore =
          score > 0
            ? currentValue === ")"
              ? score * 2
              : score * 3
            : currentValue === ")"
            ? 2
            : 3;
        if (stack.length > 0) {
          stack[stack.length - 1].score += additionalScore;
        } else {
          res += additionalScore;
        }
      }
    } else {
      //여는 괄호 출현
      stack.push({ value: currentValue, score: 0 });
    }
  }
  return res;
}

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  console.log(solve(input[0]));
}

input();

//순서대로 스택에 쌓으면서 계산한다.
//닫는 괄호 출현시 이전 괄호를 확인하고 앞의 괄호를 스택에서 뺀다
//더 이전 괄호를 확인해서 점수 부여
//이전 괄호가 없거나 다르다면 0출력 리턴
