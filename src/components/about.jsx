import React from 'react';

const About = () => {
    const englishLevel = 'B2';
  return (
    <section id="about">
      <h2>About me</h2>
      <p>I am a seasoned IT professional with extensive experience in 
        software development, project management, and team leadership. 
        Over the years, I have honed my skills in various programming languages 
        and frameworks, including JavaScript, React, Node.js, and C++. 
        I am adept at collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget. My passion for continuous learning and staying updated with the latest industry trends has enabled me to drive innovation and efficiency in every project I undertake.</p>
        <p>English level: {englishLevel}</p>
      <ul>
        <li>Email: <a href="mailto:your-email@example.com">kseniya_prankevich05@mail.ru</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/kseniya-prankevich-4a6448298">LinkedIn Profile</a></li>
        <li>Telegram: <a href="https://t.me/your-telegram">@kssyhhaa</a></li>
      </ul>
    </section>
  );
};

export default About;
