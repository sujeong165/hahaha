function startQuiz() {
    window.location.href = 'question1.html';
}

function selectAnswer(answer, nextPage) {
    const currentQuestion = window.location.pathname;
    if (currentQuestion.endsWith('question1.html')) {
        localStorage.setItem('q1', answer);
    } else if (currentQuestion.endsWith('question2.html')) {
        localStorage.setItem('q2', answer);
    } else if (currentQuestion.endsWith('question3.html')) {
        localStorage.setItem('q3', answer);
    }
    window.location.href = nextPage;
}

window.onload = function() {
    if (window.location.pathname.endsWith('result.html')) {
        const q1 = localStorage.getItem('q1');
        const q2 = localStorage.getItem('q2');
        const q3 = localStorage.getItem('q3');
        let result = '';

        if (q1 === '새로운 사람들과 친해지려고 노력한다.' && q2 === '마감 시간에 맞춰서 준비한다.' && q3 === '늘 먹던 대로 무난한 빵') {
            result = '당신은 베이글입니다!';
        } else if (q1 === '새로운 사람들과 친해지려고 노력한다.' && q2 === '아무 때나 하면 어때' && q3 === '늘 먹던 대로 무난한 빵') {
            result = '당신은 사워도우입니다!';
        } else if (q1 === '아는 사람과 깊게 친해지려고 노력한다.' && q2 === '마감 시간에 맞춰서 준비한다.' && q3 === '늘 먹던 대로 무난한 빵') {
            result = '당신은 바게트입니다!';
        } else if (q1 === '아는 사람과 깊게 친해지려고 노력한다.' && q2 === '아무 때나 하면 어때' && q3 === '늘 먹던 대로 무난한 빵') {
            result = '당신은 마늘빵입니다!';
        }

        document.getElementById('result').innerText = result;
    }
};
