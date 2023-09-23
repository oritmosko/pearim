import React from 'react';
import './Answer.css';

import { MAX_TABLET_SCREEN } from '../../AppScreenSizes';
import genderPayGap from '../../assets/gender-pay-gap-long-only-il-mark.png';

const A1 = () => {
  return (
    <div className="answer row">
      <p>
        זהו אתר שמאגד נכון להיום כ-180 דוחות של חברות שונות בשנים 2021-2022
        המציגים את פערי השכר בין נשים לגברים.
      </p>
      {window.innerWidth > 1024 && (
        <img src={genderPayGap}
           style={{maxWidth: "400px", marginRight: "10px"}} />
      )}
    </div>
  )
}

export default A1;
