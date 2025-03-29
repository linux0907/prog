// 학생 정보 샘플 데이터 (실제 서비스에선 백엔드에서 받아와야 함)
const studentData = [
  {
    studentId: "20230001",
    studentName: "홍길동",
    question: "당신의 출생지는 어디인가요?",
    answer: "서울",
    googleId: "honggildong@gmail.com",
    googlePw: "password1234"
  },
  {
    studentId: "20230002",
    studentName: "김철수",
    question: "어릴 적 애완동물 이름은?",
    answer: "초코",
    googleId: "kimchulsoo@gmail.com",
    googlePw: "mypassword5678"
  }
];

let currentStudent = null;

// 학번 + 이름 입력 후 '조회' 버튼 처리
document.getElementById("lookupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  const found = studentData.find(
    (student) => student.studentId === studentId && student.studentName === studentName
  );

  if (found) {
    currentStudent = found;
    document.getElementById("lookupForm").classList.add("hidden");
    document.getElementById("securityQuestionForm").classList.remove("hidden");
    document.getElementById("securityQuestionText").textContent = found.question;
  } else {
    alert("일치하는 학생 정보를 찾을 수 없습니다.");
  }
});

// 본인 확인 질문에 답변 입력 후 제출
document.getElementById("securityQuestionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userAnswer = document.getElementById("securityAnswer").value.trim();

  if (currentStudent && userAnswer === currentStudent.answer) {
    // 질문 정답 → 결과 표시
    document.getElementById("securityQuestionForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("googleId").textContent = currentStudent.googleId;
    document.getElementById("googlePw").textContent = currentStudent.googlePw;
  } else {
    alert("본인 확인 질문의 답이 틀렸습니다. 다시 시도해주세요.");
  }
});
