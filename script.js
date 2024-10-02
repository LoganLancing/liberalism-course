const sections = [
    {
        title: 'Welcome to Liberalism: A Journey Through Time',
        content: `
            <h1>Liberalism: A Journey Through Time</h1>
            <p>Welcome to an immersive exploration of Liberalism, tracing its roots, evolution, and profound impact on modern society. This course will guide you through the key moments and figures that shaped Liberalism, culminating in its influence on the founding of the United States.</p>
            <p>This course is designed to be a comprehensive journey, taking you deep into the philosophical underpinnings, historical developments, and practical applications of Liberalism. By the end, you'll have a robust understanding of how Liberalism has shaped the modern world and how it continues to influence contemporary thought.</p>
        `
    },
    // [Include all other sections as previously provided]
    // Chapter 1
    // Chapter 2
    // Chapter 3
    // Chapter 4
    // Chapter 5
    // Chapter 6
    // Chapter 7
    // Interactive Quiz
    // Course Completion
    // Ensure that all sections are included in the array.
];

// Initialize the current section index
let currentSection = 0;

// Function to display a section based on the index
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

// Function to go to the next section
function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        showSection(currentSection);
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Function to go to the previous section
function prevSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Function to handle quiz submission
function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    let score = 0;

    if (formData.get('q1') === 'b') score++;
    if (formData.get('q2') === 'b') score++;
    if (formData.get('q3') === 'b') score++;
    if (formData.get('q4') === 'b') score++;
    if (formData.get('q5') === 'c') score++;
    if (formData.get('q6') === 'b') score++;

    document.getElementById('quizResult').innerText = `You scored ${score} out of 6.`;

    if (score === 6) {
        alert('Excellent work! You have a strong understanding of the material.');
        currentSection++;
        showSection(currentSection);
        // Scroll to the top after showing the next section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert('Consider reviewing the course material to improve your understanding.');
    }
}

// Show the first section when the page loads
window.onload = function() {
    showSection(currentSection);
};
