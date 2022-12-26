# toggle_side_example

- 새로고침
- 페이지 이동
- 재시작(브라우저를 열고 닫고) 유지

---

- 세션 스토리지

      웹페이지의 세션이 끝날 때 저장된 데이터가 지워진다.

- 로컬 스토리지

      웹페이지의 세션이 끝나더라도 데이터가 지워지지 않는다.

---

      로컬스토리지로 웹페이지 세션이 끝나도 데이터 저장

```Javascript
let getCheck = JSON.parse(localStorage.getItem("키"));
if (getCheck === "active") {
  toggleArea.classList.add(getCheck);
}
```
