import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const WaysToGive = ({ image, giveWay, content }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="GiveImage"
        sx={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}
      />
      <CardContent sx={{ marginTop: 5 }}>
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
