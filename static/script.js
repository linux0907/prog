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

// 현재 로그인 시도 중인 학생 객체 저장용
let currentStudent = null;

// STEP 1: 학번 + 이름 입력 후 조회 버튼 처리
document.getElementById("lookupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();

  const found = studentData.find(
    (student) => student.studentId === studentId && student.studentName === studentName
  );

  if (found) {
    currentStudent = found;

    // STEP 2로 이동: 본인확인 질문 폼 표시
    document.getElementById("lookupForm").classList.add("hidden");
    document.getElementById("securityQuestionForm").classList.remove("hidden");

    // ✅ 사용자에게 질문 내용은 보여주지 않음
    document.getElementById("securityQuestionText").textContent = "히든 질문에 대한 당신의 대답은 무엇인가요?";
  } else {
    alert("일치하는 학생 정보를 찾을 수 없습니다.");
  }
});

// STEP 2: 본인확인 질문에 대한 답변 확인
document.getElementById("securityQuestionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userAnswer = document.getElementById("securityAnswer").value.trim();

  if (currentStudent && userAnswer === currentStudent.answer) {
    // STEP 3: 정답일 경우 결과 표시
    document.getElementById("securityQuestionForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("googleId").textContent = currentStudent.googleId;
    document.getElementById("googlePw").textContent = currentStudent.googlePw;
  } else {
    alert("본인 확인 질문의 답이 틀렸습니다. 다시 시도해주세요.");
  }
});
