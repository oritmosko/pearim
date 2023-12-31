import React from 'react';
import './Answer.css';


// <li>
//   לכל עמודה מצויין כמה נשים מרוויחות מתחת לממוצע באותו פילוח. שווה להעיף מבט.
// </li>
const A4 = () => {
  return (
    <div className="answer">
      <p>
        גם מבלי לדעת מי האוכלוסייה בכל פילוח, שכן זה מידע שחברות לא חושפות, ניתן ללמוד הרבה מהדוחות:
      </p>
      <ul>
        <li>
          מינוסים. יש פערי שכר. והם לא קטנים בכלל.
        </li>
        <li>
          פילוחים בדוחות שנותרו ריקים מטעמי פרטיות של העובדים באותה קבוצת פילוח. המשמעות של זה? ככל הנראה מדובר קבוצה שמכילה רק נשים או רק גברים. אמנם זה לא מראה מספר שמצביע על פער, אבל מציף בעיה אחרת חשובה לא פחות.
        </li>
        <li>
          פערים בין שכר קובע לפיצויים- השכר המדווח לביטוח הפנסיוני, לבין שכר ברוטו- שכר המדווח למס הכנסה. המשמעות של זה? פערים שמקורם בפרמטרים אחרים מלבד שכר הבסיס.
        </li>
      </ul>
    </div>
  )
}

export default A4;
