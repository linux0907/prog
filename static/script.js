// 예시 데이터: 실제 배포 시엔 서버에서 받아오도록!
const studentAccounts = [
  { id: "20230001", name: "김민수", googleId: "kms2023@gmail.com", googlePw: "pw1234" },
  { id: "20230002", name: "이서연", googleId: "lsy2023@gmail.com", googlePw: "pw5678" },
  { id: "20230003", name: "박지훈", googleId: "pjh2023@gmail.com", googlePw: "pw9999" },
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lookupForm");
  const resultBox = document.getElementById("result");
  const googleIdSpan = document.getElementById("googleId");
  const googlePwSpan = document.getElementById("googlePw");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 폼 기본 제출 막기

    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();

    const account = studentAccounts.find(
      (s) => s.id === studentId && s.name === studentName
    );

    if (account) {
      googleIdSpan.textContent = account.googleId;
      googlePwSpan.textContent = account.googlePw;
      resultBox.classList.remove("hidden");
    } else {
      googleIdSpan.textContent = "일치하는 정보가 없습니다.";
      googlePwSpan.textContent = "";
      resultBox.classList.remove("hidden");
    }
  });
});
