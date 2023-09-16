import React from 'react';
import './About.css';

import A1 from './Answers/A1'
import A2 from './Answers/A2'
import A3 from './Answers/A3'
import A4 from './Answers/A4'
import A5 from './Answers/A5'
import A6 from './Answers/A6'
import A7 from './Answers/A7'
import A8 from './Answers/A8'

const About = () => {
  const qAndAData = [
    {
      question: 'קצת נתונים לגבי הבעיה',
      answer: <A1 />
    },
    {
      question: 'כיצד ניסו לפתור אותה?',
      answer: <A2 />
    },
    {
      question: 'מה קורה בפועל?',
      answer: <A3 />
    },
    {
      question: 'מה בכל זאת ניתן לקרוא בדוחות?',
      answer: <A4 />
    },
    {
      question: 'כמה ממצאים מהדוחות',
      answer: <A5 />
    },
    {
      question: 'אז מה חסר, מה אפשר לעשות אחרת כדי שהדוחות יעשו את השינוי שצריך?',
      answer: <A6 />
    },
    {
      question: 'מה המטרה של האתר?',
      answer: <A7 />
    },
    {
      question: 'רגע, אז יש פה את כל הדוחות שפורסמו?',
      answer: <A8 />
    },
    {
      question: 'מספר מעניין - 518. למה דווקא זה?',
      answer:
      <div>
        <p className="qna-answer">
          <a href='https://www.globes.co.il/news/article.aspx?did=1001340473' className="link" target='_blank' rel="noopener noreferrer">כי מאה פעמים חמסה ועוד ח"י.</a>
        </p>
        <p className="qna-answer">
          עוד חשוב לשים לב, כי באותה כתבה מצויין כי "החוק יחול על 180 מעסיקים גדולים, בפיילוט לשלוש שנים, שבסיומו יוחלט אם להרחיבו" - ורצוי שירחיבו! כך כתוב, כי אם ישנו את מספר הקסם 518 ל-100, נזכה לשקיפות בפערי השכר בקרוב ל-3000 חברות.
        </p>
      </div>
    },
  ];

  return (
    <div className="about-content">
      {qAndAData.map((item, index) => (
        <div key={index} className="qna-item">
          <h3 className="qna-question">{item.question}</h3>
          {item.answer}
        </div>
      ))}
    </div>
  );
};

export default About;
