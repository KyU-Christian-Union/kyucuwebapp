import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const WaysToGive = ({ image, giveWay, content }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt="GiveImage"
        sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 3, objectFit: 'contain' }}
      />
      <CardContent sx={{ marginTop: 2 }}>
        <Typography variant="h2" align="left" gutterBottom>
          {giveWay}
        </Typography>
        <Typography variant="h6" align="justify" gutterBottom sx={{ fontWeight: 400 }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WaysToGive;
