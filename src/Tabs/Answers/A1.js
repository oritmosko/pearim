import React from 'react';
import './Answer.css';

import DialogLink from '../../Components/Link'
import womenInManagementFullSize from '../../assets/women_in_management_full_size.png';

const A1 = () => {
  return (
    <div className="answer">
      <ul>
        <li>
          <DialogLink linkText="ישראל במקום השני, לאחר קוריאה, בדירוג פערי השכר בין נשים לגברים בין מדינות ה-OECD"
                      graphLink="https://data.oecd.org/chart/7aNj"
                      graphTitle="Gender_wage_gap_2022"
                      graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2022 or latest available" />
        </li>
        <li>
          <DialogLink linkText="לפי ה-OECD הפערים בעשור האחרון, החל מ2012, צמחו מ-20% ללמעלה מ-25%"
                      graphLink="https://data.oecd.org/chart/7clR"
                      graphTitle="Gender_wage_gap_2012_2022"
                      graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2012 – latest" />
        </li>
        <li>
          <DialogLink linkText="לפי הבנק העולמי, ייצוג הנשים בעמדות הנהלה עומד על כ-30%"
                      graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                      graphTitle="Gender_wage_gap_2022"
                      graphLinkCaption="Employment in senior and middle management, female (%)"
                      imageSrc={womenInManagementFullSize} />
        </li>
        <li>
          <DialogLink linkText="ייצוג הנשים בממשלה בישראל עומד על כ-12.5%, לעומת ייצוג ממוצע של כ-37% במדינות ה-OECD"
                      graphLink="https://data.oecd.org/chart/7clU"
                      graphTitle="Gender_politics_2022"
                      graphLinkCaption="OECD Chart: Women in politics, Women ministers, Percentage, Annual, 2022 or latest available" />
        </li>
      </ul>
    </div>
  )
}

export default A1;
