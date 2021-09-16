// librarry_named.js 파일에서 내보낸 식별자 가져오기
// 가져와서 객체에 저장하기

import { conHello, fnPlusNumbers } from "./library_named.js";
const log = console.log;

log(conHello, "이름으로 내보내기 입니다.");
log("1 + 2 = ", fnPlusNumbers(1, 2));

// library_named.js 파일에서 내보낸 식별자 모두 가져오기
// 모든 식별자 가져와서 myLibrary 객체에 저장
import * as myLibrary from "./library_named.js";
log(myLibrary.conHello, "*을 사용한 이름으로 내보내기 입니다.");
log("3 + 4 = ", myLibrary.fnPlusNumbers(3, 4));

// 기본 모듈 가져오기
// 가져온 모듈 객체에 저장
import myFunction from "./library_default.js";
log("안녕하세요. 기본으로 내보내기 입니다.");
log("10 - 5 = ", myFunction(10, 5));
