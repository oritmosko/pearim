import React from 'react';
import './About.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import genderPayGap from '../assets/gender-pay-gap.png';
import genderPayGapLong from '../assets/gender-pay-gap-long.png';
import womenInPolitics from '../assets/women-in-politics.png';
import womenInManagement from '../assets/women_in_management.png';
import womenInManagementFullSize from '../assets/women_in_management_full_size.png';
// import israel from '../assets/israel1.png';
import GraphCard from '../Components/GraphCard'

const About = () => {
  debugger;
  const aboutDialog = {
    title: "חוק שכר שווה",
    content:
      <div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ביום 25.08.2020, התקבל תיקון מס' 6 לחוק שכר שווה, ולפיו על מעסיק שמעסיק למעלה מ- 518 עובדים חלה עליו חובה להפיק מדי שנה 2 דוחות (דוח פנימי ופומבי), המפרטים את פערי השכר במקום העבודה בין גברים לנשים וכן למסור הודעה לעובד/ת בדבר פערי השכר.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          בעמוד <a href="#reports"
                    className="link"
                    onClick={() => {document.getElementsByClassName("reports")[0].click()}}>
                    הדוחות
                 </a> תמצאו דוחות רבים של חברות ממשלתיות, גופים ציבוריים, הייטק, נדלן, בנקים ועוד.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        בעמוד <a href="#reports"
                  className="link"
                  onClick={() => {document.getElementsByClassName("qna")[0].click()}}>
                  על הדוח
                  </a> תוכלו למצוא הסבר על הדוחות, מה יש ומה חסר.
        </Typography>
      </div>
  }

  const sm = window.innerWidth > 600 ? 6 : 12; // Small window displayes one cell in row
  return (
    <div className="about-content">
      <Box sx={{}}>
        <Grid container={true}
              justifyContent="flex-start"
              rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item sm={sm} flexGrow={1}>
            <GraphCard graphLink="https://data.oecd.org/chart/7aNj"
                       previewImage={genderPayGap}
                       cardTitle="1. פערי השכר בין נשים לגברים בישראל מהגבוהים במדינות ה-OECD"
                       graphTitle="Gender_wage_gap_2022"
                       graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2022 or latest available" />
          </Grid>
          <Grid item sm={sm} flexGrow={1}>
            <GraphCard graphLink="https://data.oecd.org/chart/7aNk"
                       previewImage={genderPayGapLong}
                       cardTitle="2. הפערים רק גדלים"
                       graphTitle="Gender_wage_gap_2008_2022"
                       graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2008 – latest" />
          </Grid>
           <Grid item sm={sm} flexGrow={1}>
             <GraphCard graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                        previewImage={womenInManagement}
                        cardTitle="3. ייצוג הנשים בעמדות הנהלה עומד על כ30%"
                        graphTitle="Gender_wage_gap_2022"
                        graphLinkCaption="Employment in senior and middle management, female (%)"
                        imageSrc={womenInManagementFullSize} />
          </Grid>
          <Grid item sm={sm} flexGrow={1}>
            <GraphCard graphLink="https://data.oecd.org/chart/7aPd"
                       previewImage={womenInPolitics}
                       cardTitle="4. ייצוג נשים בפוליטיקה הישראלית מהנמוכים במדינות ה-OECD"
                       graphTitle="Gender_politics_2022"
                       graphLinkCaption="OECD Chart: Women in politics, Women parliamentarians, Percentage, Annual, 2022 or latest available" />
          </Grid>
          <Grid item sm={12} flexGrow={1}>
            <GraphCard cardTitle="אז מה הפתרון?"
                       textDialog={aboutDialog} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default About;
