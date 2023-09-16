import React, { useState } from 'react';
import './Link.css';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';

const DialogLink = (props) => {
  const { linkText, graphLink, graphTitle, graphLinkCaption, imageSrc } = props;
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <a className="open-dialog" onClick={() => setShowDialog(true)}>
        {linkText}
        <OpenInNewIcon className="open-icon"
                       color="action"
                       fontSize="small" />
      </a>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogContent>
          {!imageSrc && (
            <iframe src={graphLink}
                title={graphTitle}
                width="857"
                height="380"
                scrolling="no"
                style={{maxWidth: "100%", border: 0}}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allowFullScreen={true} >
            </iframe>
          )}
          {imageSrc && (
            <img src={imageSrc}
               alt=""
               width="857"
               height="380"
               style={{maxWidth: "100%", border: 0}} />
          )}
          <p className="caption-separator" />
          <a className="graph-caption" href={graphLink} target="_blank" rel="noreferrer">
            {graphLinkCaption}
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
}

DialogLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  graphLink: PropTypes.string.isRequired,
  graphTitle: PropTypes.string.isRequired,
  graphLinkCaption: PropTypes.string.isRequired,
};


export default DialogLink;
