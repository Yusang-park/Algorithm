const solve = (n, inequalitySigns) => {
  const visit = new Array(10).fill(0); //0부터 9까지

  let max = String(Number.MIN_SAFE_INTEGER); //최댓값
  let min = String(Number.MAX_SAFE_INTEGER); //최솟값

  for (let i = 0; i < 10; i++) {
    // 첫 숫자가 0~9까지 모두 조회하면 된다.
    visit[i] = 1; //방문 표시
    dfs(0, i, `${i}`); //동기적 실행
    visit[i] = 0; //방문 표시 초기화
  }

  function dfs(index, prev, result) {
    if (index === n) {
      //끝까지 숫자를 채웠을 때 결과를 검토
      max = result > max ? result : max;
      min = result < min ? result : min;
      return;
    }
    if (inequalitySigns[index] === "<") {
      for (let i = prev + 1; i < 10; i++) {
        // 부등호가 < 이면 전 숫자보다 큰 숫자에서 사용 가능 여부를 판단

        if (visit[i]) continue;
        visit[i] = 1;
        dfs(index + 1, i, result + i);

        visit[i] = 0; // 재귀적으로 visit 배열을 계속 사용해야 하므로 사용 가능 여부를 없애고 재귀가 끝나면 다시 부여한다.
      }
    } else {
      for (let i = prev - 1; i > -1; i--) {
        // 부등호가 > 이면 전 숫자보다 작은 숫자에서 사용 가능 여부를 판단
        if (visit[i]) continue; //숫자 사용 불가능, 만약 숫자들이 모두 사용 불가능하다면 해당 분기는 삭제됨
        visit[i] = 1;

        dfs(index + 1, i, result + i);
        visit[i] = 0;
      }
    }
    return;
  }

  return `${max}\n${min}`;
};

function input() {
  const input = require("fs")
    .readFileSync("testcase.txt")
    .toString()
    .trim()
    .split("\n");

  const n = +input[0];
  const inequalitySigns = input[1].split(" ");

  console.log(solve(n, inequalitySigns));
}

input();
