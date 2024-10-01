const sections = [
    {
        title: 'Welcome to Liberalism: A Journey Through Time',
        content: `
            <h1>Liberalism: A Journey Through Time</h1>
            <p>Welcome to an immersive exploration of Liberalism, tracing its roots, evolution, and profound impact on modern society. This course will guide you through the key moments and figures that shaped Liberalism, culminating in its influence on the founding of the United States.</p>
            <img src="images/journey.jpg" alt="Journey Image" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 1: The Dawn of Enlightenment',
        content: `
            <h2>Chapter 1: The Dawn of Enlightenment</h2>
            <p>The Age of Enlightenment, spanning the 17th and 18th centuries, was a pivotal period that championed reason, science, and individualism over tradition and religious authority. It set the stage for revolutionary ideas that reshaped the world.</p>
            <div class="quote">"Dare to know! Have courage to use your own reason!" — Immanuel Kant</div>
            <p>This era questioned long-held beliefs and sought to understand the world through observation and rational thought, laying the groundwork for modern philosophy and political thought.</p>
            <img src="images/enlightenment.jpg" alt="Enlightenment Image" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 2: Philosophers Who Shaped Liberalism',
        content: `
            <h2>Chapter 2: Philosophers Who Shaped Liberalism</h2>
            <p>Meet the thinkers whose revolutionary ideas formed the backbone of Liberalism:</p>
            <div class="philosophers">
                <div class="philosopher">
                    <h3>John Locke (1632–1704)</h3>
                    <img src="images/john-locke.jpg" alt="John Locke">
                    <p>Locke proposed that all individuals possess natural rights to life, liberty, and property. He argued that governments exist to protect these rights and that authority comes from the consent of the governed.</p>
                </div>
                <div class="philosopher">
                    <h3>Montesquieu (1689–1755)</h3>
                    <img src="images/montesquieu.jpg" alt="Montesquieu">
                    <p>Montesquieu introduced the concept of the separation of powers within government into legislative, executive, and judicial branches to prevent tyranny and protect freedom.</p>
                </div>
                <div class="philosopher">
                    <h3>Thomas Reid (1710–1796)</h3>
                    <img src="images/thomas-reid.jpg" alt="Thomas Reid">
                    <p>A leading figure of the Scottish Enlightenment, Reid founded the Scottish School of Common Sense, emphasizing that common sense beliefs form the foundation of human knowledge. His ideas greatly influenced American thinkers.</p>
                </div>
            </div>
        `
    },
    {
        title: 'Chapter 3: The Scottish Enlightenment and Its Influence',
        content: `
            <h2>Chapter 3: The Scottish Enlightenment and Its Influence</h2>
            <p>The Scottish Enlightenment was a period of intellectual ferment in Scotland during the 18th century, producing advances in philosophy, economics, and the sciences.</p>
            <p>Thomas Reid challenged the skepticism of contemporaries like David Hume, advocating that common sense and direct experience are the basis of knowledge. His work reinforced the importance of individual perception and reason.</p>
            <div class="quote">"There is no greater impediment to the advancement of knowledge than the ambiguity of words." — Thomas Reid</div>
            <p>Reid's ideas crossed the Atlantic, influencing American intellectuals and shaping their views on governance and society.</p>
            <img src="images/scottish-enlightenment.jpg" alt="Scottish Enlightenment" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 4: Liberalism Takes Root in America',
        content: `
            <h2>Chapter 4: Liberalism Takes Root in America</h2>
            <p>The Enlightenment and Liberalism significantly influenced the Founding Fathers of the United States. They drew upon these philosophies to construct a new nation founded on principles of freedom, equality, and justice.</p>
            <h3>The Declaration of Independence</h3>
            <p>Drafted by Thomas Jefferson, it asserts that all men are created equal with unalienable rights, and that governments derive their just powers from the consent of the governed.</p>
            <div class="quote">"We hold these truths to be self-evident, that all men are created equal..." — Declaration of Independence</div>
            <h3>The Constitution</h3>
            <p>Established a system of checks and balances through separation of powers, protecting individual rights and limiting governmental authority.</p>
            <img src="images/founding-fathers.jpg" alt="Founding Fathers" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 5: A Break from the Past',
        content: `
            <h2>Chapter 5: A Break from the Past</h2>
            <p>The establishment of the United States marked a radical departure from traditional forms of governance:</p>
            <ul>
                <li>Rejected absolute monarchy and hereditary rule.</li>
                <li>Embraced republicanism and representative democracy.</li>
                <li>Enshrined the protection of individual rights and liberties.</li>
                <li>Promoted freedom of speech, religion, and the press as fundamental rights.</li>
            </ul>
            <p>This new model inspired democratic movements worldwide and showcased the practical application of Liberalism.</p>
            <img src="images/american-revolution.jpg" alt="American Revolution" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 6: Core Principles of Liberalism Explored',
        content: `
            <h2>Chapter 6: Core Principles of Liberalism Explored</h2>
            <p>Let's delve deeper into the foundational beliefs of Liberalism:</p>
            <h3>Individual Freedom</h3>
            <p>The right of individuals to act and make choices free from unwarranted external restrictions.</p>
            <div class="quote">"Liberty consists in the freedom to do everything which injures no one else." — Declaration of the Rights of Man and of the Citizen</div>
            <h3>Equality</h3>
            <p>All individuals are entitled to equal treatment under the law and equal opportunity to succeed.</p>
            <h3>Democratic Governance</h3>
            <p>A political system where power is vested in the people, exercised directly or through elected representatives.</p>
            <h3>Rule of Law</h3>
            <p>The principle that all individuals and institutions are accountable to laws that are fairly applied and enforced.</p>
            <img src="images/liberalism-principles.jpg" alt="Liberalism Principles" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 7: Defending and Articulating Liberalism',
        content: `
            <h2>Chapter 7: Defending and Articulating Liberalism</h2>
            <p>To effectively advocate for Liberalism, consider the following approaches:</p>
            <h3>Historical Successes</h3>
            <p>Highlight how liberal democracies have fostered innovation, economic prosperity, and social progress.</p>
            <h3>Moral Arguments</h3>
            <p>Emphasize the ethical imperative of protecting individual rights and freedoms.</p>
            <h3>Countering Authoritarianism</h3>
            <p>Discuss the dangers of concentrated power and the benefits of checks and balances.</p>
            <h3>Adaptability</h3>
            <p>Showcase how Liberalism evolves to meet new societal challenges while upholding core values.</p>
            <img src="images/defending-liberalism.jpg" alt="Defending Liberalism" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Chapter 8: Reflecting on the Journey',
        content: `
            <h2>Chapter 8: Reflecting on the Journey</h2>
            <p>You've traversed the rich history of Liberalism, from its philosophical roots to its concrete influence on modern governance. Reflect on how these ideas continue to shape societies today and consider your role in upholding these principles.</p>
            <div class="quote">"The price of liberty is eternal vigilance." — Thomas Jefferson</div>
            <img src="images/reflection.jpg" alt="Reflection" style="width:100%; border-radius:8px; margin-top:20px;">
        `
    },
    {
        title: 'Interactive Quiz: Test Your Knowledge',
        content: `
            <h2>Interactive Quiz: Test Your Knowledge</h2>
            <p>Let's assess your understanding of the course material.</p>
            <form id="quizForm">
                <div class="quiz-question">
                    <p><strong>1. Which philosopher is associated with the idea of natural rights to life, liberty, and property?</strong></p>
                    <label><input type="radio" name="q1" value="a"> Montesquieu</label><br>
                    <label><input type="radio" name="q1" value="b"> John Locke</label><br>
                    <label><input type="radio" name="q1" value="c"> Thomas Reid</label>
                </div>
                <div class="quiz-question">
                    <p><strong>2. What did the Scottish Enlightenment emphasize?</strong></p>
                    <label><input type="radio" name="q2" value="a"> Skepticism towards all forms of knowledge</label><br>
                    <label><input type="radio" name="q2" value="b"> Common sense as the foundation of human understanding</label><br>
                    <label><input type="radio" name="q2" value="c"> Absolute monarchy as the ideal government</label>
                </div>
                <div class="quiz-question">
                    <p><strong>3. The principle of separating government powers into different branches is attributed to whom?</strong></p>
                    <label><input type="radio" name="q3" value="a"> Thomas Hobbes</label><br>
                    <label><input type="radio" name="q3" value="b"> Montesquieu</label><br>
                    <label><input type="radio" name="q3" value="c"> John Locke</label>
                </div>
                <div class="quiz-question">
                    <p><strong>4. Which document declared that all men are created equal with unalienable rights?</strong></p>
                    <label><input type="radio" name="q4" value="a"> The United States Constitution</label><br>
                    <label><input type="radio" name="q4" value="b"> The Declaration of Independence</label><br>
                    <label><input type="radio" name="q4" value="c"> The Bill of Rights</label>
                </div>
                <div class="quiz-question">
                    <p><strong>5. Liberalism promotes which of the following core principles?</strong></p>
                    <label><input type="radio" name="q5" value="a"> Authoritarian rule</label><br>
                    <label><input type="radio" name="q5" value="b"> Individual freedoms and rights</label><br>
                    <label><input type="radio" name="q5" value="c"> Centralized economic planning</label>
                </div>
                <button type="button" onclick="submitQuiz()">Submit Quiz</button>
            </form>
            <div id="quizResult"></div>
        `
    },
    {
        title: 'Course Completion: Your Journey Continues',
        content: `
            <h2>Congratulations on Completing the Course!</h2>
            <p>You have successfully completed "Liberalism: A Journey Through Time." You now have a deeper understanding of the origins, development, and enduring impact of Liberalism.</p>
            <p>As you move forward, consider how these principles apply in today's world and your role in advocating for the values of freedom, equality, and justice.</p>
            <p>Download the comprehensive cheat-sheet summarizing key concepts:</p>
            <a href="liberalism-cheatsheet.pdf" download class="download-btn">Download Cheat-Sheet</a>
            <p>Thank you for being part of this journey!</p>
            <img src="images/celebration.jpg" alt="Celebration" style="width:100%; border-radius:8px; margin-top:20px;">
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
    if (formData.get('q2') === 'b') score++;
    if (formData.get('q3') === 'b') score++;
    if (formData.get('q4') === 'b') score++;
    if (formData.get('q5') === 'b') score++;

    document.getElementById('quizResult').innerText = `You scored ${score} out of 5.`;

    if (score === 5) {
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
