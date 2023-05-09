// /정규표현/.test("문자열")

console.log(/JAS/.test("JASvascript")); // JAS가 문자열에 포함되어있는지 여부

console.log(/^iP/.test("iPhone")); // 첫 문자가 iP로 시작하는지 여부

console.log(/입니다$/.test("출근중입니다")); // 마지막 문자가 입니다. 로 끝나는지 여부

console.log(/Java.*/.test("Javaa")); // Jav 다음에 문자a가 존재하는지 여부

console.log(/[KQJ]/.test("카드 J입니다.")); // 'K','Q','J'중 하나의 문자라도 포함되어있는지 여부

console.log(/[a-z]/.test("b입니다.")); // 소문자 a~z중에 하나라도 포함되어있는지 여부

console.log(/[A-Z]/.test("K입니다.")); // 대문자 A-Z중 하나라도 포함되어있는지 여부

console.log(/[^1234]/.test("5")); // 문자 1개만 검사, 1,2,3,4 외의 문자가 있는지 여부

console.log(/[^1-9]/.test("z")); // 문자 1개만 검사, 1~9 외의 문자가 있는지 여부

console.log(/\d/.test("123abc")); // 문자열 내 숫자가 존재하는지 여부

console.log(/\D/.test("123ABC")); // 문자열 내 숫자 외의 문자가 존재하는지 여부

console.log(/\d+-\d+-\d+/.test("010-1234-5678")); // 숫자-숫자-숫자 형식의 문자 존재 여부 d 숫자, - 문자열'-'

console.log("010-1234-5678".replace(/-/g, ""));
