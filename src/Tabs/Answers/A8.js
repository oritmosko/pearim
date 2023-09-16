import React from 'react';
import './Answer.css';


const A8 = () => {
  return (
    <div className="answer">
      <p>
      לא! באתר פרסמתי כ180 דוחות סה"כ, אלו כל הדוחות שמצאתי. אני בטוחה שחסרים עוד הרבה.
      לחלק מהחברות מצאתי דוח רק משנה אחת, ויש חברות שלא מצאתי כלל.
      <br />
      אם אתם מוצאים דוחות שלא פורסמו, אשמח אם תכתבו לי בעמוד&nbsp;
      <a href="#reports"
         className="link"
         onClick={() => {document.getElementsByClassName("contact")[0].click()}}>
         צרו קשר
      </a>.
      </p>
    </div>
  )
}

export default A8;
