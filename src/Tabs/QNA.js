import React from 'react';

import './QNA.css';

const QNA = () => {
  const qAndAData = [
  {
    question: 'מה זה הדו"ח הזה?',
    answer:
      <div>
        <p className="qna-answer">
          כל גוף, פומבי או ציבורי, שמעסיק מעלה מ- 518 עובדים חלה עליו חובה להפיק מדי שנה 2 דוחות (פנימי ופומבי), המפרטים את פערי השכר במקום העבודה בין גברים לנשים וכן למסור הודעה לעובד.ת בדבר פערי השכר.
        </p>
        <p className="qna-answer">
          למידע נוסף, לחצו
          <a href='https://www.kolzchut.org.il/he/%D7%97%D7%95%D7%91%D7%AA_%D7%9E%D7%A2%D7%A1%D7%99%D7%A7%D7%99%D7%9D_%D7%9C%D7%A4%D7%A8%D7%A1%D7%9D_%D7%9E%D7%99%D7%93%D7%A2_%D7%91%D7%93%D7%91%D7%A8_%D7%A4%D7%A2%D7%A8%D7%99_%D7%94%D7%A9%D7%9B%D7%A8_%D7%91%D7%99%D7%9F_%D7%92%D7%91%D7%A8%D7%99%D7%9D_%D7%9C%D7%A0%D7%A9%D7%99%D7%9D' className='link' target='_blank'> כאן.</a>
        </p>
      </div>
  },
  {
    question: 'מה המטרה של האתר?',
    answer:
    <p className="qna-answer">
      שקיפות והנגשה. נכון להיום כל חברה מחוייבת לפרסם דו"ח שנתי, אבל אין מקום אחד שמאגד את המידע. בעתיד (ראו שאלות הבאות), אולי יהיה ניתן לפרסם חיתוכים מעניינים, גרפים וסטטיסטיקות על הנתונים.
    </p>
  },
  {
    question: 'אפשר הסבר על הדו"ח?',
    answer:
      <div>
        <p className="qna-answer">
          מאתר "כל זכות": "דוח פומבי, המתבסס על הדוח הפנימי, יפורסם לציבור פעם בשנה (לרבות באתר האינטרנט של המעסיק, אם יש כזה). הדוח יכלול, בין היתר, את פערי השכר הממוצע של העובדים המועסקים אצל המעסיק באחוזים, בלי לגלות את כינוי קבוצות העובדים במקום העבודה ובאופן שאינו מאפשר זיהוי של עובדים."
        </p>
        <p className="qna-answer">
          כלומר, כל חברה מחוייבת לפרסם נתונים על פערי השכר בין נשים לגברים, איך אין אחידות או הנחייה לגבי הדרך בה נעשה הפילוח.
        </p>
      </div>
  },
  {
    question: 'הדו"חות מסובכים. על מה להסתכל?',
    answer:
    <div>
      <p className="qna-answer">
        בגדול, למינוסים. עדיין יש פערי שכר.
      </p>
      <p className="qna-answer">
        דבר נוסף, לכל עמודה מצויין כמה נשים מרוויחות מתחת לממוצע באותו פילוח. שווה להעיף מבט.
      </p>
    </div>
  },
  {
    question: 'מספר מעניין - 518. למה דווקא זה?',
    answer:
    <div>
      <p className="qna-answer">
        <a href='https://www.globes.co.il/news/article.aspx?did=1001340473' className='link' target='_blank'>כי מאה פעמים חמסה ועוד ח"י.</a>
      </p>
      <p className="qna-answer">
        עוד חשוב לשים לב, כי באותה כתבה מצויין כי "החוק יחול על 180 מעסיקים גדולים, בפיילוט לשלוש שנים, שבסיומו יוחלט אם להרחיבו" - ואנחנו רוצים שירחיבו.
      </p>
    </div>
  }
];

  return (
    <div className="qna-content">
      {qAndAData.map((item, index) => (
        <div key={index} className="qna-item">
          <h3 className="qna-question">{item.question}</h3>
          {item.answer}
        </div>
      ))}
    </div>
  );
};

export default QNA;
