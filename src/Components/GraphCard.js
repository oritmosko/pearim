import React, { useState } from 'react';
import './GraphCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const GraphCard = (props) => {
  const { graphLink, previewImage, cardTitle, graphTitle, graphLinkCaption, imageSrc, textDialog } = props;
  const [showDialog, setShowDialog] = useState(false);

  const handleCardClick = () => {
    setShowDialog(!showDialog);
  };

  const card = window.innerWidth < 768 ?
  (
    <Card sx={{ minWidth: "90%", margin: "0 auto" }}
          onClick={handleCardClick} >
      <CardActionArea sx={{ minWidth: "100%" }}>
        {cardTitle && (
          <CardContent>
            <Typography variant="h7" color="text.secondary" sx={{ fontWeight: 'bold', minWidth: "100%" }} >
              {cardTitle}
            </Typography>
            </CardContent>
        )}
      </CardActionArea>
    </Card>
  )
  :
  (
    <Card sx={{ maxWidth: 345,
                margin: "0 auto",
                borderRadius: "8px;",
                boxShadow: "0px 2px 8px 6px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);" }}
          onClick={handleCardClick} >
      <CardActionArea>
        <CardMedia
          sx={{ width: "100%", height: 170 }}
          component="img"
          src={previewImage}
          alt=""
        />
        {cardTitle && (
          <CardContent>
            <Typography variant="h7" color="text.secondary" sx={{ fontWeight: 'bold' }} >
              {cardTitle}
            </Typography>
            </CardContent>
        )}
      </CardActionArea>
    </Card>
  )

  return (
    <div>
      {card}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogContent>
          {!textDialog && !imageSrc && (
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
          {!textDialog && imageSrc && (
            <img src={imageSrc}
               alt=""
               width="857"
               height="380"
               style={{maxWidth: "100%", border: 0}} />
          )}
          {textDialog && (
            <div>
              <Typography variant="h5" component="div">
                {textDialog.title}
              </Typography>
              <p/>
              {textDialog.content}
            </div>
          )}
          <p className="caption-separator" />
          {!textDialog && (
            <a className="graph-caption" href={graphLink} target="_blank" rel="noreferrer">
              {graphLinkCaption}
            </a>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

GraphCard.propTypes = {
  graphLink: PropTypes.string,
  previewImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string,
  graphTitle: PropTypes.string,
  graphLinkCaption: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default GraphCard;
