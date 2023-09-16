import React, { useState } from 'react';
import './GraphCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../assets/logo.png';

const GraphCard = (props) => {
  const { graphLink, previewImage, cardTitle, graphTitle, graphLinkCaption, imageSrc, textDialog } = props;
  const [showDialog, setShowDialog] = useState(false);

  const handleCardClick = () => {
    setShowDialog(!showDialog);
  };

  let cardMinWidth = 0;
  if (window.innerWidth <= 600) {
    cardMinWidth = "300px";
  }
  if (window.innerWidth <= 300) {
    cardMinWidth = "auto";
  }
  const card = (
    <Card sx={{
                  width: "80%",
                  minWidth: cardMinWidth,
                  margin: "0 auto",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 8px 6px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);" }}
            onClick={handleCardClick} >
        <CardActionArea sx={{ }} >
          {previewImage && window.innerWidth > 600 && (
            <CardMedia
              sx={{
                maxWidth: "100%",
                margin: "0 auto"
              }}
              component="img"
              src={previewImage}
              alt="" />
          )}
          {cardTitle && (
            <CardContent sx={{ display: "flex",
                               alignItems: "center",
                               height: "fit-content" }}>
              {!previewImage && (
                <CardMedia
                  sx={{
                    maxWidth: "40px",
                    margin: "0 auto"
                  }}
                  component="img"
                  src={logo}
                  alt="" />
              )}
              <Typography
                sx={{ fontWeight: 'bold', flexGrow: 1, marginLeft: "8px" }}
                variant={!previewImage ? "subtitle1" : "h7"}
                color="text.secondary" >
                {cardTitle}
              </Typography>
              <OpenInNewIcon color="action" fontSize="small" />
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
  previewImage: PropTypes.string,
  cardTitle: PropTypes.string,
  graphTitle: PropTypes.string,
  graphLinkCaption: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default GraphCard;
