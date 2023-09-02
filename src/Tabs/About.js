import React, { useState } from 'react';
import './About.css';

import { Skeleton } from '@mui/material';


const About = () => {
  const reportLink = "https://data.oecd.org/chart/7aNj";
  //"https://data.oecd.org/chart/7aMK";

  // const [iframeLoaded, setIframeLoaded] = useState(false);
  // const [iframeStyle, setIframeStyle] = useState({ display: 'none' });
  // const handleLoaded = () => {
  //   setIframeLoaded(true);
  //   setIframeStyle({maxWidth: 100 + "%", border: 0});
  // }
  // {!iframeLoaded && (
  //   <Skeleton variant="rectangular"
  //             width={857}
  //             height={448}
  //             style={{maxWidth: 100 + "%", border: 0}}
  //             animation="wave" />
  // )}
  // onLoad={() => handleLoaded()}

  return (
    <div className="about-content">
      <iframe src={reportLink}
              title="oecd"
              width="857"
              height="380"
              scrolling="no"
              style={{maxWidth: 100 + "%", border: 0}}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allowFullScreen={true}>
      </iframe>
      <p className="report-caption" />
      <a href={reportLink} target="_blank" rel="noreferrer">
        OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2022 or latest available
      </a>

      <p className="" />
      <iframe src="https://data.oecd.org/chart/7aNk"
              width="857"
              height="380"
              style={{maxWidth: 100 + "%", border: 0}}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allowFullScreen={true}>
      </iframe>
      <p className="report-caption" />
      <a href="https://data.oecd.org/chart/7aMR" target="_blank" rel="noreferrer">
        OECD Chart: Gender wage gap, Employees, Percentage, Annual, 2008 – latest
      </a>
    </div>
  )
};

export default About;
