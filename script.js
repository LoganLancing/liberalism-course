const sections = [
    {
        title: 'Welcome to Liberalism: A Journey Through Time',
        content: `
            <h1>Liberalism: A Journey Through Time</h1>
            <p>Welcome to an immersive exploration of Liberalism, tracing its roots, evolution, and profound impact on modern society. This course will guide you through the key moments and figures that shaped Liberalism, culminating in its influence on the founding of the United States.</p>
            <p>This course is designed to be a comprehensive journey, taking you deep into the philosophical underpinnings, historical developments, and practical applications of Liberalism. By the end, you'll have a robust understanding of how Liberalism has shaped the modern world and how it continues to influence contemporary thought.</p>
        `
    },
    {
        title: 'Chapter 1: The Dawn of Enlightenment',
        content: `
            <h2>Chapter 1: The Dawn of Enlightenment</h2>
            <p>The Age of Enlightenment, also known as the Age of Reason, was a pivotal period in European history that spanned the 17th and 18th centuries. It was characterized by a surge in intellectual exploration, scientific discoveries, and philosophical debates that challenged traditional authority and dogma.</p>
            <p>The Enlightenment thinkers believed in the power of human reason to understand the world and improve society. They promoted ideas such as liberty, progress, tolerance, fraternity, constitutional government, and separation of church and state.</p>
            <div class="quote">"Common sense and reason both arise from the same root." — Thomas Reid</div>
            <p>This era questioned long-held beliefs and sought to understand the world through observation and rational thought, laying the groundwork for modern philosophy and political thought.</p>
        `
    },
    // Include all other sections here in the same format
    // Make sure to properly enclose each content string with backticks
    // For brevity, only a few sections are shown
    {
        title: 'Interactive Quiz: Test Your Knowledge',
        content: `
            <h2>Interactive Quiz: Test Your Knowledge</h2>
            <p>Let's assess your understanding of the course material.</p>
            <form id="quizForm">
                <div class="quiz-question">
                    <p><strong>1. Which of the following is a key idea proposed by John Locke?</strong></p>
                    <label><input type="radio" name="q1" value="a"> The concept of social contract where people give up all rights to a sovereign.</label><br>
                    <label><input type="radio" name="q1" value="b"> The notion that individuals have natural rights to life, liberty, and property.</label><br>
                    <label><input type="radio" name="q1" value="c"> The idea that government should have absolute power to maintain order.</label>
                </div>
                <!-- Include all other quiz questions -->
                <button type="button" onclick="submitQuiz()">Submit Quiz</button>
            </form>
            <div id="quizResult"></div>
        `
    },
    {
        title: 'Course Completion: Your Journey Continues',
        content: `
            <h2>Congratulations on Completing the Course!</h2>
            <p>You have successfully completed "Liberalism: A Journey Through Time." You now have a comprehensive understanding of the origins, development, and enduring impact of Liberalism.</p>
            <p>We hope this journey has inspired you to think critically about the principles that underpin modern society and to engage actively in the ongoing dialogue about freedom, rights, and governance.</p>
            <p>Download the comprehensive cheat-sheet summarizing key concepts:</p>
            <a href="liberalism-cheatsheet.pdf" download class="download-btn">Download Cheat-Sheet</a>
            <p>Thank you for participating in this course. Your journey of learning and exploration doesn't end here. Continue to question, learn, and contribute to the world around you.</p>
        `
    }
];

let currentSection = 0;

function showSection(index) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="section active">
            ${sections[index].content}
        </div>
    `;
    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = (index >= sections.length - 2) ? 'none' : 'inline-block';
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
    }
}

function prevSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
}

function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    let score = 0;

    if (formData.get('q1') === 'b') score++;
    // Continue scoring for all questions
    // Ensure that the correct answers match the options provided

    document.getElementById('quizResult').innerText = `You scored ${score} out of 6.`;

    if (score === 6) {
        alert('Excellent work! You have a strong understanding of the material.');
        currentSection++;
        showSection(currentSection);
    } else {
        alert('Consider reviewing the course material to improve your understanding.');
    }
}

window.onload = function() {
    showSection(currentSection);
};
