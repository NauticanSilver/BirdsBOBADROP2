function checkAnswers() {
    const correctAnswers = ['b', 'b', 'b', 'a', 'b'];
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        if (formData.get(`q${i}`) === correctAnswers[i - 1]) {
            score++;
        }
    }