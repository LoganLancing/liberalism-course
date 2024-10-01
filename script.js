const sections = [
    {
        title: 'Welcome to Liberalism 101',
        content: `
            <h1>Liberalism 101</h1>
            <p>Embark on a journey to understand the foundations of Liberalism, its historical context, and its profound influence on modern governance, especially in the United States.</p>
            <img src="images/enlightenment.jpg" alt="Enlightenment Image" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'The Age of Enlightenment',
        content: `
            <h2>The Age of Enlightenment</h2>
            <p>The Enlightenment was an intellectual and philosophical movement that dominated the world of ideas in Europe during the 17th and 18th centuries.</p>
            <ul>
                <li>Emphasized reason, individualism, and skepticism of traditional doctrines.</li>
                <li>Questioned traditional authority and embraced the notion that humanity could be improved through rational change.</li>
                <li>Set the stage for modern thinking about politics, science, and human rights.</li>
            </ul>
            <img src="images/enlightenment-thinkers.jpg" alt="Enlightenment Thinkers" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'Key Philosophers',
        content: `
            <h2>Key Philosophers</h2>
            <p>Meet the thinkers who shaped Liberalism:</p>
            <div class="philosophers">
                <div class="philosopher">
                    <h3>John Locke</h3>
                    <p>Known as the "Father of Liberalism," Locke argued for natural rights to life, liberty, and property.</p>
                </div>
                <div class="philosopher">
                    <h3>Montesquieu</h3>
                    <p>Advocated for the separation of powers within government to prevent tyranny.</p>
                </div>
                <div class="philosopher">
                    <h3>Thomas Reid</h3>
                    <p>A leading figure of the Scottish Enlightenment, Reid emphasized common sense philosophy and had a significant influence on American thinkers.</p>
                </div>
            </div>
        `
    },
    {
        title: 'The Scottish Enlightenment and Thomas Reid',
        content: `
            <h2>The Scottish Enlightenment</h2>
            <p>A period of intellectual ferment in Scotland during the 18th century, which contributed greatly to advancements in philosophy, economics, and the sciences.</p>
            <h3>Thomas Reid (1710–1796)</h3>
            <ul>
                <li>Founder of the Scottish School of Common Sense.</li>
                <li>Critiqued the skepticism of contemporaries like David Hume.</li>
                <li>Emphasized that common sense beliefs form the foundation of human knowledge.</li>
                <li>Influenced American Founding Fathers in their approach to governance and rights.</li>
            </ul>
            <img src="images/thomas-reid.jpg" alt="Thomas Reid" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'Liberalism and the Founding of the United States',
        content: `
            <h2>Liberalism and the Founding of the United States</h2>
            <p>The principles of Liberalism and Enlightenment philosophy were integral to the founding documents of the United States.</p>
            <h3>The Declaration of Independence</h3>
            <ul>
                <li>Asserts unalienable rights: life, liberty, and the pursuit of happiness.</li>
                <li>Emphasizes government deriving power from the consent of the governed.</li>
            </ul>
            <h3>The Constitution</h3>
            <ul>
                <li>Establishes a system of checks and balances through separation of powers.</li>
                <li>Protects individual rights and limits governmental power.</li>
            </ul>
            <img src="images/declaration.jpg" alt="Declaration of Independence" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'A Break from the Past',
        content: `
            <h2>A Break from the Past</h2>
            <p>The founding of the United States represented a significant shift from traditional monarchical and colonial systems.</p>
            <ul>
                <li>Moved away from absolute monarchy and hereditary privilege.</li>
                <li>Established a republic based on democratic principles.</li>
                <li>Focused on individual rights rather than the interests of the ruling class.</li>
                <li>Promoted freedom of speech, religion, and the press.</li>
            </ul>
            <img src="images/revolution.jpg" alt="American Revolution" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'Core Principles of Liberalism',
        content: `
            <h2>Core Principles of Liberalism</h2>
            <p>Understanding the foundational beliefs of Liberalism:</p>
            <ul>
                <li><strong>Individual Freedom:</strong> Personal autonomy and freedom of choice.</li>
                <li><strong>Equality:</strong> Equal rights and opportunities for all citizens.</li>
                <li><strong>Democratic Governance:</strong> Power lies with the people, exercised through free and fair elections.</li>
                <li><strong>Rule of Law:</strong> Everyone is subject to the law, ensuring fairness and justice.</li>
            </ul>
            <img src="images/liberalism.jpg" alt="Liberalism Principles" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'Defending Liberalism',
        content: `
            <h2>Defending Liberalism</h2>
            <p>Articulating and defending the tenets of Liberalism involves:</p>
            <ul>
                <li>Highlighting historical successes in promoting human rights and prosperity.</li>
                <li>Emphasizing the moral imperative of individual freedoms.</li>
                <li>Pointing out the dangers of authoritarianism and unchecked power.</li>
                <li>Demonstrating how Liberalism adapts to societal changes while maintaining core values.</li>
            </ul>
            <img src="images/defend.jpg" alt="Defending Liberalism" style="width:100%; border-radius:8px;">
        `
    },
    {
        title: 'Interactive Quiz',
        content: `
            <h2>Test Your Knowledge</h2>
            <p>Let's see how much you've learned!</p>
            <form id="quizForm">
                <div class="quiz-question">
                    <p><strong>1. Which movement emphasized reason and individualism over tradition?</strong></p>
                    <label><input type="radio" name="q1" value="a"> The Renaissance</label><br>
                    <label><input type="radio" name="q1" value="b"> The Enlightenment</label><br>
                    <label><input type="radio" name="q1" value="c"> The Industrial Revolution</label>
                </div>
                <div class="quiz-question">
                    <p><strong>2. Who is known as the "Father of Liberalism"?</strong></p>
                    <label><input type="radio" name="q2" value="a"> Thomas Reid</label><br>
                    <label><input type="radio" name="q2" value="b"> John Locke</label><br>
                    <label><input type="radio" name="q2" value="c"> Montesquieu</label>
                </div>
                <div class="quiz-question">
                    <p><strong>3. What document asserts the unalienable rights of life, liberty, and the pursuit of happiness?</strong></p>
                    <label><input type="radio" name="q3" value="a"> The United States Constitution</label><br>
                    <label><input type="radio" name="q3" value="b"> The Declaration of Independence</label><br>
                    <label><input type="radio" name="q3" value="c"> The Bill of Rights</label>
                </div>
                <div class="quiz-question">
                    <p><strong>4. Which philosopher was a key figure in the Scottish Enlightenment and influenced American thinkers?</strong></p>
                    <label><input type="radio" name="q4" value="a"> David Hume</label><br>
                    <label><input type="radio" name="q4" value="b"> Adam Smith</label><br>
                    <label><input type="radio" name="q4" value="c"> Thomas Reid</label>
                </div>
                <button type="button" onclick="submitQuiz()">Submit Quiz</button>
            </form>
            <div id="quizResult"></div>
        `
    },
    {
        title: 'Course Completion',
        content: `
            <h2>Congratulations!</h2>
            <p>You've completed Liberalism 101. You're now equipped with a foundational understanding of Liberalism, its historical context, and its impact on modern governance.</p>
            <p>Download the cheat-sheet summarizing the key points:</p>
            <a href="liberalism-cheatsheet.pdf" download class="download-btn">Download Cheat-Sheet</a>
            <p>Thank you for participating!</p>
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
    document.getElementById('nextBtn').style.display = (index === sections.length - 1 || index === sections.length - 2) ? 'none' : 'inline-block';
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
    if (formData.get('q2') === 'b') score++;
    if (formData.get('q3') === 'b') score++;
    if (formData.get('q4') === 'c') score++;

    document.getElementById('quizResult').innerText = `You scored ${score} out of 4.`;

    if (score === 4) {
        currentSection++;
        showSection(currentSection);
    } else {
        alert('Please review the course material and try again.');
    }
}

window.onload = function() {
    showSection(currentSection);
};
