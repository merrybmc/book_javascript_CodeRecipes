let s = "97 75 88 99 95 92 73";
console.log(solution(s));

function solution(s) {
  // 소수가 들어갈 배열 prime
  let prime = [];
  // 소수가 아닌 수가 들어갈 배열 un_prime
  let un_prime = [];
  // 문자열을 공백을 기준으로 자르고 각각을 값을 my_Array 배열에 저장
  let my_Array = s.split(" ");

  // i는 0부터 배열 s의 최대길이 -1까지 1씩 증가하며 반복
  for (let i = 0; i < my_Array.length; i++) {
    // prime_check 변수 선언 및 false로 초기화
    // prime_check가 false면 소수
    // prime_check가 true면 소수가 아닌 수
    let prime_check = false;

    // check(배열의[0~6]값) 함수를 실행하여
    // 리턴 값을 prime_check에 대입
    prime_check = check(my_Array[i]);

    // 만약 리턴받은 값이 true면 un_prime에 배열[i] 값 추가
    if (prime_check == true) {
      un_prime.push(my_Array[i]);
    }

    // 만약 리턴받은 값이 false면 prime에 배열[i] 값 추가
    if (prime_check == false) {
      prime.push(my_Array[i]);
    }
  }

  // 결과값을 저장할 result 배열에 [un_prime에서 가장 큰 수, prime에서 가장 작은 수] 대입
  let result = [Math.max(...un_prime), Math.min(...prime)];

  // result 배열을 문자열로 합치고 최종 결과값을 리턴
  return result.join(" ");
}

// 배열의 값이 소수인지 아닌지 판별해줄 check 함수
function check(n) {
  // 리턴값을 저장해줄 변수 check 선언 및 true 값으로 초기화
  let check = true;

  // 소수인지 판별할 i값이 2부터 n까지 1씩 증가하는 반복문
  for (let i = 2; i < n; i++) {
    // 만약 n을 i로 나누었을 때 나머지가 0이면
    if (n % i == 0) {
      // 소수가 아닌 수 이기 때문에 check를 false로 대입해주고 리턴
      check = false;
      return check;
      // i가 정수인 n/2일 경우와 n을 i로 나누었을 때 나머지가 1보다 클 경우
    } else if (i == Math.trunc(n / 2) && n % i >= 1) {
      // 소수 이기 때문에 초기화된 값 true를 그대로 리턴
      return check;
    }
  }
}
