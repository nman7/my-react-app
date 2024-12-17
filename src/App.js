import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>Nauman Mansuri</h1>
                <p className="subtitle">Master in Information Technology Extension | Data Analytics</p>
                <div className="links">
                    <a href="mailto:naumanmansuri.au@gmail.com" className="link">Email</a> | 
                    <a href="https://www.linkedin.com/in/nauman-mansuri-215580173" target="_blank" rel="noopener noreferrer" className="link"> LinkedIn</a> | 
                    <a href="https://github.com/nman7" target="_blank" rel="noopener noreferrer" className="link"> GitHub</a>
                </div>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <p><strong>University of Technology, Sydney (July 2024 - Present)</strong></p>
                    <p>Master in Information Technology Extension (Major: Data Analytics)</p>
                    <p><strong>Adani Institute of Infrastructure Engineering, Ahmedabad (2017-2021)</strong></p>
                    <p>Bachelor of Information & Communication Technology</p>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <ul className="skills">
                    <li>Languages: Python, Java, JavaScript, HTML, CSS</li>
                    <li>Frameworks/Libraries: Django, Flask, FastAPI, Keras, Scikit-learn</li>
                    <li>Tools/Technologies: AWS, Docker, Machine Learning, TensorFlow, Redis, Celery</li>
                </ul>
            </section>

            <section className="section">
                <h2>Professional Experience</h2>
                <div className="experience">
                    <h3>ZOPPER (Solvy Tech Pvt. Ltd.) - Software Engineer</h3>
                    <p className="duration"><em>October 2022 - July 2024, Noida, India</em></p>
                    <ul>
                        <li>Developed the Insurance Sales Journey product, increasing policy sales by 25%.</li>
                        <li>Designed a logging service to enhance monitoring and bug fixes.</li>
                        <li>Onboarded motor insurers and integrated APIs for product distribution.</li>
                    </ul>

                    <h3>STASHFIN (EQX Analytics Pvt. Ltd.) - Backend Developer</h3>
                    <p className="duration"><em>May 2021 - September 2022, New Delhi, India</em></p>
                    <ul>
                        <li>Built internal portals improving departmental efficiency.</li>
                        <li>Implemented AWS Pinpoint and Message91 for targeted communications.</li>
                        <li>Migrated APIs to modern Python frameworks, improving performance.</li>
                    </ul>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>
                        <a href="https://github.com/nman7/Covid-19-India-Dashboard" target="_blank" rel="noopener noreferrer" className="project-link">
                            Covid-19 Dashboard
                        </a>
                    </h3>
                    <p>Built a dashboard providing daily COVID-19 updates across Indian states using Flask, HTML, CSS, and Bootstrap.</p>

                    <h3>
                        <a href="https://github.com/nman7/angreasy" target="_blank" rel="noopener noreferrer" className="project-link">
                            Angreasy - Improving English Vocabulary
                        </a>
                    </h3>
                    <p>Developed a tool to help students enhance vocabulary using YouTube video timestamps and NLP techniques.</p>
                </div>
            </section>

            <section className="section">
                <h2>Achievements</h2>
                <ul className="achievements">
                    <li>1st Position at HACK-NU-THON for predicting respiratory diseases using deep learning.</li>
                    <li>IBM Data Science Specialization on Coursera.</li>
                    <li>Completed 'Machine Learning A-Z' and 'Python Django Development' courses on Udemy.</li>
                </ul>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Nauman Mansuri | Portfolio Website</p>
            </footer>
        </div>
    );
}

export default App;
