const questions = [
  {
    question: "Môi trường phát triển web (JavaScript) đưa ra cấu trúc tiêu chuẩn nào để xác thực dữ liệu của dữ liệu đầu vào do người dùng nhập vào?",
    answers: [
      { text: "Truy cập trang server", correct: false },
      { text: "Sự kiện phía client", correct: false },
      { text: "Cho phép phía server", correct: false },
      { text: "Cấu trúc vòng lặp có kiểm soát", correct: true },
    ],
  },
  {
    question: "Một chương trình JavaScript được phát triển trên Unix ________.",
    answers: [
      { text: "chỉ dùng được trên Unix", correct: false },
      { text: "sẽ hoạt động hoàn toàn tốt trên Windows", correct: true },
      { text: "sẽ được hiển thị dưới dạng văn bản JavaScript trên trình duyệt", correct: false },
      { text: "sẽ gây ra lỗi và ngoại lệ", correct: false },
    ],
  },
  {
    question: "Một chữ thập lục phân bắt đầu bằng?",
    answers: [
      { text: "0X", correct: false },
      { text: "Cả 0x và 0X", correct: true },
      { text: "00", correct: false },
      { text: "0x", correct: false },
    ],
  },
  {
    question: "Loại biến dễ thay đổi là _____________?",
    answers: [
      { text: "Immutable variable", correct: false },
      { text: "Volatile variable", correct: false },
      { text: "Mutable variable", correct: true },
      { text: "Dynamic variable", correct: false },
    ],
  },
  {
    question: "Mã JavaScript có thể được gọi bằng cách sử dụng ___________.",
    answers: [
      { text: "Function/Method", correct: true },
      { text: "RMI", correct: false },
      { text: "Triggering Event", correct: false },
      { text: "Preprocessor", correct: false },
    ],
  },
  {
    question: "Cú pháp tổng quát để biểu diễn số thực là gì?",
    answers: [
      { text: "[digits][+digits][(E|e)[(+|-)]digits]", correct: false },
      { text: "[digits][(E|e)[(+|-)]digits]", correct: false },
      { text: "[.digits][digits][(E|e)[(+|-)]digits]", correct: false },
      { text: "[digits][.digits][(E|e)[(+|-)]digits]", correct: true },
    ],
  },
  {
    question: "Trong quá trình tính toán giá trị số học trong JS, nếu kết quả là giá trị vô hạn thì?",
    answers: [
      { text: "In Type Error", correct: false },
      { text: "Hiển thị “Infinity”", correct: true },
      { text: "Không có đáp án đúng", correct: false },
      { text: "In Reference Error", correct: false },
    ],
  },
  {
    question: "Giữa sử dụng biến toàn cục và biến cục bộ thì nên sử dụng loại biến nào tốt hơn cho performance?",
    answers: [
      { text: "Biến cục bộ", correct: true },
      { text: "Hai biến đều như nhau", correct: false },
      { text: "Performance không bị ảnh hưởng bởi biến", correct: false },
      { text: "Biến toàn cục", correct: false },
    ],
  },
  {
    question: "Để kiểm tra pattern có khớp với chuỗi text không, câu lệnh là?",
    answers: [
      { text: "text.equals(pattern)", correct: false },
      { text: "text.test(pattern)", correct: false },
      { text: "pattern.test(text)", correct: true },
      { text: "text==pattern", correct: false },
    ],
    images: "assets/images/ques_02.png"
  },
  {
    question: "Mọi thứ trong JavaScript đều là...",
    answers: [
      { text: "function hoặc object", correct: false },
      { text: "object", correct: false },
      { text: "number hoặc object", correct: false },
      { text: "primitives hoặc object", correct: true },
    ],
  },
  {
    question: "Ý nghĩa của debugger trong đoạn mã bên dưới là gì?",
    answers: [
      { text: "Nó được sử dụng như một từ khóa gỡ lỗi toàn bộ chương trình cùng một lúc", correct: false },
      { text: "Nó gỡ lỗi trong câu lệnh đó và khởi động lại quá trình thực thi câu lệnh đó", correct: true },
      { text: "Nó không làm gì khác ngoài một điểm ngắt đơn giản", correct: false },
      { text: "Nó được sử dụng để tìm lỗi trong câu lệnh", correct: false },
    ],
    images: "assets/images/ques_04.png"
  },
  {
    question: "Kết quả in ra từ đoạn mã bên dưới là gì?",
    answers: [
      { text: "20 và NaN", correct: true },
      { text: "20 và 63", correct: false },
      { text: "NaN và 20", correct: false },
      { text: "20 và 62.83185307179586", correct: false },
    ],
    images: "assets/images/ques_03.png"
  },
  {
    question: "3 giai đoạn của event propagation là gì?",
    answers: [
      { text: "Bubbling > Target > Capturing", correct: false },
      { text: "Target > Bubbling > Capturing", correct: false },
      { text: "Capturing > Target > Bubbling", correct: true },
      { text: "Target > Capturing > Bubbling", correct: false },
    ],
    images: "assets/images/ques_01.png"
  },
  {
    question: "Đoạn mã sau sẽ hoạt động như thế nào với p là một link list?",
    answers: [
      { text: "Dẫn đến lỗi runtime với thông báo “Cannot use Linked List”", correct: false },
      { text: "Ném ra một exception vì chỉ số nguyên mới có thể sử dụng trong vòng lặp for", correct: false },
      { text: "Đoạn mã sẽ hoạt động bình thường", correct: true },
      { text: "Đoạn mã trả về lỗi ReferenceError", correct: false },
    ],
    images: "assets/images/ques_05.png"
  },
  {
    question: "Hãy cho biết kết quả của đoạn mã bên dưới?",
    answers: [
      { text: "ReferenceError: helo is not defined", correct: true },
      { text: "undefined", correct: false },
      { text: "null", correct: false },
      { text: "{ }", correct: false },
    ],
    images: "assets/images/ques_06.png"
  },
];

const questionElement = $('#question');
const answerButtons = $('#answer-buttons');
const nextButton = $('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.text("Tiếp tục");
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.text(questionNo + " " + currentQuestion.question);

    answerButtons.empty();

    if (currentQuestion.images) {
        // If the question has images, add them to the question element
        const imageElement = $('<img>').attr('src', currentQuestion.images);
        questionElement.append(imageElement);
    }

    $.each(currentQuestion.answers, (index, answer) => {
        const button = $('<button class="btn"></button>').text(answer.text);
        answerButtons.append(button);

        if (answer.correct) {
            button.data('correct', answer.correct);
        }

        button.on('click', selectAnswer);
    });
}

function resetState() {
    nextButton.hide();
    answerButtons.empty();
}

function selectAnswer(e) {
    const selectedBtn = $(e.target);
    const isCorrect = selectedBtn.data('correct') === true;

    if (isCorrect) {
        selectedBtn.addClass('correct');
        score++;
    } else {
        selectedBtn.addClass('incorrect');
    }

    answerButtons.children().each((index, button) => {
        const btn = $(button);
        if (btn.data('correct') === true) {
            btn.addClass('correct');
        }
        btn.show();
    });

    nextButton.show();
}

function showScore() {
    resetState();
    questionElement.text(`Điểm số của bạn ${score} trong tổng số ${questions.length} câu hỏi!`);
    nextButton.text("Thử lại").show();
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.on("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Initial setup
startQuiz();




