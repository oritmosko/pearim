import React from 'react';
import './Answer.css';


const A8 = () => {
  return (
    <div className="answer">
      <p>
      לא, באתר יש כ180 דוחות סה"כ. לחלק מהחברות נמצא דוח רק משנה אחת, ויש חברות שכלל לא נמצא עבורן דוח.
      <br />
      אם מצאתם דוח שלא פורסם&nbsp;
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
