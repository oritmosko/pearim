import React, { useState } from 'react';
import './About.css';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import genderPayGap from '../assets/gender-pay-gap.png';
import genderPayGapLong from '../assets/gender-pay-gap-long.png';
import womenInPolitics from '../assets/women-in-politics.png';
import womenInManagement from '../assets/women_in_management.png';
import womenInManagementFullSize from '../assets/women_in_management_full_size.png';
import israel from '../assets/israel.png';
import GraphCard from '../Components/GraphCard'

const About = () => {
  const sm = window.innerWidth < 768 ? 12 : 6; // Small window displayes one cell in row
  return (
    <div className="about-content">
      <Box sx={{}}>
        <Grid container={true}
              justifyContent="flex-start"
              rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }} >
          <Grid item sm={sm} flexGrow={1} >
            <GraphCard graphLink="https://data.oecd.org/chart/7aNj"
                       previewImage={genderPayGap}
                       cardTitle="1. פערי השכר בין נשים לגברים בישראל מהגבוהים במדינות ה-OECD"
                       graphTitle="Gender_wage_gap_2022"
                       graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2022 or latest available"
             />
          </Grid>
          <Grid item sm={sm} flexGrow={1} >
            <GraphCard graphLink="https://data.oecd.org/chart/7aNk"
                       previewImage={genderPayGapLong}
                       cardTitle="2. הפערים רק גדלים"
                       graphTitle="Gender_wage_gap_2008_2022"
                       graphLinkCaption="OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2008 – latest"
             />
          </Grid>
          {window.innerWidth >= 768 && (
            <Grid item sm={12} flexGrow={1} >
              <GraphCard graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                         previewImage={israel}
                         graphTitle="Gender_wage_gap_report"
                         graphLinkCaption="Employment in senior and middle management, female (%)"
                         imageSrc={israel}
               />
             </Grid>
           )}
          <Grid item sm={sm} flexGrow={1} >
            <GraphCard graphLink="https://data.oecd.org/chart/7aPd"
                       previewImage={womenInPolitics}
                       cardTitle="3. ייצוג נשים בפוליטיקה הישראלית מהנמוכים במדינות ה-OECD"
                       graphTitle="Gender_politics_2022"
                       graphLinkCaption="OECD Chart: Women in politics, Women parliamentarians, Percentage, Annual, 2022 or latest available"
             />
          </Grid>
          <Grid item sm={sm} flexGrow={1} >
            <GraphCard graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                       previewImage={womenInManagement}
                       cardTitle="4. ייצוג הנשים בעמדות הנהלה עומד על כ30%"
                       graphTitle="Gender_wage_gap_2022"
                       graphLinkCaption="Employment in senior and middle management, female (%)"
                       imageSrc={womenInManagementFullSize}
             />
          </Grid>
          {window.innerWidth < 768 && (
            <Grid item sm={12} flexGrow={1} >
              <GraphCard graphLink="https://genderdata.worldbank.org/indicators/sl-emp-smgt-fe-zs/?geos=ISR&view=trend"
                         previewImage={israel}
                         cardTitle="אז מה זה הדוח הזה?"
                         graphTitle="Gender_wage_gap_report"
                         graphLinkCaption="Employment in senior and middle management, female (%)"
                         imageSrc={israel}
               />
             </Grid>
           )}
        </Grid>
      </Box>
    </div>
  )
};

export default About;
