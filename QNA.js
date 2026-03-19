class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    createHTML() {
        const div = document.createElement('div');
        div.className = 'qa-item';
        div.innerHTML = `
            <div class="question">${this.question}</div>
            <div class="answer">${this.answer}</div>
        `;

        div.addEventListener('click', () => {
            div.classList.toggle('active');
        });

        return div;
    }
}

const myQuestions = [
    new QAItem("What is HTML?", "It stands for HyperText Markup Language."),
    new QAItem("What is CSS?", "It is used for styling the website."),
    new QAItem("What is JS?", "It adds logic and interactivity.")
];

const list = document.getElementById('faq-list');
myQuestions.forEach(item => {
    list.appendChild(item.createHTML());
});