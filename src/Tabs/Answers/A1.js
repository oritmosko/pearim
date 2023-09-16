import React from 'react';
import './Answer.css';

import DialogLink from '../../Components/Link'
import womenInManagementFullSize from '../../assets/women_in_management_full_size.png';

const A1 = () => {
  return (
    <div className="answer">
      <ol>
        <li>
          <DialogLink linkText="פערי השכר בין נשים לגברים בישראל מהגבוהים במדינות ה-OECD"
                      graphLink="https://data.oecd.org/chart/7aNj"
                      graphTitle="Gender_wage_gap_2022"
                      graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2022 or latest available" />
        </li>
        <li>
          <DialogLink linkText="הפערים רק גדלים"
                      graphLink="https://data.oecd.org/chart/7aNk"
                      graphTitle="Gender_wage_gap_2008_2022"
                      graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2008 – latest" />
        </li>
        <li>
          <DialogLink linkText="ייצוג הנשים בעמדות הנהלה עומד על כ30%"
                      graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                      graphTitle="Gender_wage_gap_2022"
                      graphLinkCaption="Employment in senior and middle management, female (%)"
                      imageSrc={womenInManagementFullSize} />
        </li>
        <li>
          <DialogLink linkText="ייצוג נשים בפוליטיקה הישראלית מהנמוכים במדינות ה-OECD"
                      graphLink="https://data.oecd.org/chart/7aPd"
                      graphTitle="Gender_politics_2022"
                      graphLinkCaption="OECD Chart: Women in politics, Women parliamentarians, Percentage, Annual, 2022 or latest available" />
        </li>
      </ol>
    </div>
  )
}

export default A1;
