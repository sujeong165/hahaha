function startQuiz() {
    window.location.href = 'question1.html';
}

function selectAnswer(answer, nextPage) {
    const currentQuestion = window.location.pathname;
    if (currentQuestion.endsWith('question1.html')) {
        localStorage.setItem('q1', answer);
    } else if (currentQuestion.endsWith('question2.html')) {
        localStorage.setItem('q2', answer);
    }
    window.location.href = nextPage;
}

window.onload = function() {
    if (window.location.pathname.endsWith('result.html')) {
        const q1 = localStorage.getItem('q1');
        const q2 = localStorage.getItem('q2');
        let result = '';

        if (q1 === '아침' && q2 === '빨강') {
            result = '당신은 베이글입니다!';
        } else if (q1 === '점심' && q2 === '초록') {
            result = '당신은 사워도우입니다!';
        } else if (q1 === '저녁' && q2 === '파랑') {
            result = '당신은 바게트입니다!';
        } else {
            result = '당신은 크루아상입니다!';
        }

        document.getElementById('result').innerText = result;
    }
};
