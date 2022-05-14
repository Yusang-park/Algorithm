function solution(atmos) {
  let badDustScroe = 81;
  let badestDustScroe = 151;
  let badSmallestDustScore = 36;
  let badestSmallestScore = 76;
  let answer = 0;
  let maskExpired = -1;

  for (let i = 0; i < atmos.length; i++) {
    const [dust, smallestDus] = atmos[i];
    if (dust >= badestDustScroe && smallestDus >= badestSmallestScore) {
      //둘다 매우 나쁨인 경우
      if (maskExpired >= 0) {
        //이전에 착용하던 마스크가 있다면
        maskExpired = -1;
      } else {
        //이전에 마스크를 착용하지 않았다면
        answer++;
      }
    } else if (dust >= badDustScroe || smallestDus >= badSmallestDustScore) {
      //이전에 착용하던 마스크가 있다면
      if (maskExpired >= 0) {
      } else {
        //이전에 마스크를 착용하지 않았다면
        maskExpired = 2;
        answer++;
      }
    }
    maskExpired--;
  }

  return answer;
}

console.log(
  solution([
    [140, 90],
    [177, 75],
    [95, 45],
    [71, 31],
    [150, 30],
    [80, 35],
    [72, 33],
    [166, 81],
    [151, 75],
  ])
);

//1. 미세먼지나 초미세 먼지가 하나라도 나쁨 이상이면 마스크 착용.
//2. 마스크 재착용 최대한으로 하자.
//3. 착용한 날로 부터 d+2까지 착용한 후 폐기, d+2 자정에 폐기
//4. 미세먼지/ 초미세먼지가 둘다 매우 나쁨이면 폐기
//5. 필요한 날 없으면 0 리턴
