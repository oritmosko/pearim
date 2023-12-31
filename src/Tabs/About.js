import React from 'react';
import './About.css';

import A0 from './Answers/A0'
import A01 from './Answers/A01'
import A1 from './Answers/A1'
import A2 from './Answers/A2'
import A3 from './Answers/A3'
import A4 from './Answers/A4'
import A5 from './Answers/A5'
import A6 from './Answers/A6'
import A8 from './Answers/A8'
import A9 from './Answers/A9'

const About = () => {
  const qAndAData = [
    {
      question: 'אמ;לק',
      answer: <A0 />
    },
    {
      question: 'מה המטרה של האתר?',
      answer: <A01 />
    },
    {
      question: 'נתונים על פערי השכר בישראל',
      answer: <A1 />
    },
    {
      question: 'חוק שכר שווה - ניסיון חלש לקידום שקיפות בפערי שכר',
      answer:
        <div>
          <A2 />
          <A3 />
        </div>
    },
    {
      question: 'מה בכל זאת ניתן להבין מהדוחות?',
      answer: <A4 />
    },
    {
      question: 'כמה ממצאים מהדוחות',
      answer: <A5 />
    },
    // {
    //   question: 'אז מה חסר, מה אפשר לעשות אחרת כדי שהדוחות יעשו את השינוי שצריך?',
    //   answer: <A6 />
    // },
    {
      question: 'רגע, אז יש פה את כל הדוחות שפורסמו?',
      answer: <A8 />
    },
    // {
    //   question: 'מספר מעניין - 518. למה דווקא זה?',
    //   answer: <A9 />
    // },
  ];

  return (
    <div className="about-content">
      {qAndAData.map((item, index) => (
        <div key={index} className="qna-item">
          <h3 className="question">{item.question}</h3>
          {item.answer}
        </div>
      ))}
    </div>
  );
};

export default About;
