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
          <a href='https://www.kolzchut.org.il/he/%D7%97%D7%95%D7%91%D7%AA_%D7%9E%D7%A2%D7%A1%D7%99%D7%A7%D7%99%D7%9D_%D7%9C%D7%A4%D7%A8%D7%A1%D7%9D_%D7%9E%D7%99%D7%93%D7%A2_%D7%91%D7%93%D7%91%D7%A8_%D7%A4%D7%A2%D7%A8%D7%99_%D7%94%D7%A9%D7%9B%D7%A8_%D7%91%D7%99%D7%9F_%D7%92%D7%91%D7%A8%D7%99%D7%9D_%D7%9C%D7%A0%D7%A9%D7%99%D7%9D' className='link' target='_blank' rel='noopener noreferrer'> כאן.</a>
        </p>
        </div>
    },
    {
      question: 'מה המטרה של האתר?',
      answer:
      <p className="qna-answer">
        שקיפות והנגשה. נכון להיום כל חברה מחוייבת לפרסם דו"ח שנתי, אבל אין מקום אחד שמאגד את המידע. בעתיד אולי יהיה ניתן לפרסם חיתוכים מעניינים, גרפים וסטטיסטיקות על הנתונים.
      </p>
    },
    {
      question: 'הדו"חות מסובכים. על מה להסתכל?',
      answer:
      <div>
        <p className="qna-answer">
          1. בגדול, על המינוסים. יש פערי שכר. והם לא קטנים בכלל.
        </p>
        <p className="qna-answer">
          2. לכל עמודה מצויין כמה נשים מרוויחות מתחת לממוצע באותו פילוח. שווה להעיף מבט.
        </p>
          3. למטיבי לכת, שימו לב לאותיות הקטנות בכל דו"ח. למשל שימו לב כי יש פער בין שכר קובע לפיצויים- השכר המדווח לביטוח הפנסיוני, לבין שכר ברוטו- שכר המדווח למס הכנסה.
        <p></p>
        <p className="qna-answer">
          בהרחבה, מאתר "כל זכות": "דוח פומבי, המתבסס על הדוח הפנימי, יפורסם לציבור פעם בשנה (לרבות באתר האינטרנט של המעסיק, אם יש כזה). הדוח יכלול, בין היתר, את פערי השכר הממוצע של העובדים המועסקים אצל המעסיק באחוזים, בלי לגלות את כינוי קבוצות העובדים במקום העבודה ובאופן שאינו מאפשר זיהוי של עובדים."
        </p>
        <p className="qna-answer">
          כלומר, כל חברה מחוייבת לפרסם נתונים על פערי השכר בין נשים לגברים, איך אין אחידות או הנחייה לגבי הדרך בה נעשה הפילוח, לכן באמת המידע נראה עמוס ולא מסודר.
        </p>
      </div>
    },
    {
      question: 'מספר מעניין - 518. למה דווקא זה?',
      answer:
      <div>
        <p className="qna-answer">
          <a href='https://www.globes.co.il/news/article.aspx?did=1001340473' className='link' target='_blank' rel='noopener noreferrer'>כי מאה פעמים חמסה ועוד ח"י.</a>
        </p>
        <p className="qna-answer">
          עוד חשוב לשים לב, כי באותה כתבה מצויין כי "החוק יחול על 180 מעסיקים גדולים, בפיילוט לשלוש שנים, שבסיומו יוחלט אם להרחיבו" - ורצוי שירחיבו! כך כתוב, כי אם ישנו את מספר הקסם 518 ל-100, נזכה לשקיפות בפערי השכר בקרוב ל-3000 חברות.
        </p>
      </div>
    },
    {
      question: 'מה הלאה?',
      answer:
      <p className="qna-answer">
        שאלה מצוינת. המשותף למרבית הדו"חות זה ההסברים - וותק, שעות נוספות, הוצאות רווחה, מענקי פרישה ועוד - לא פערים על רקע מגדרי. חסרה לקיחת אחריות, וצעדים מצד החברות לצמצום הפער, כמו גם אחידות ושקיפות לגבי המידע שחברות מחוייבות להציג לגבי המידע שחברות מחוייבות להציג. כדי שהחוק הזה יתורגם למעשים בפועל, יש לנקוט צעדים ממשיים -
         <a href='https://www.calcalist.co.il/local_news/article/sjjn2ri00c'
        className='link' target='_blank' rel='noopener noreferrer'> חוק גילוי פערי השכר לא ישפיע ללא סנקציות.</a>
      </p>
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
