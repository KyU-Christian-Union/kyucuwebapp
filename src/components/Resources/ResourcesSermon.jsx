import { Typography, Grid, Card, Box, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import makeStyles from '@mui/styles/makeStyles';
import SermonImage from '../../assets/images/sermon_image.jpg';

const useStyles = makeStyles(() => ({
  Card: {
    backgroundImage: `url(${SermonImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const ResourcesSermon = () => {
  const classes = useStyles();
  return (
    <Card>
      <Box
        className={classes.Card}
        sx={{
          height: 350,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardHeader
          sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
          avatar={
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '60%',
                padding: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <YouTubeIcon sx={{ color: 'red' }} />
            </div>
          }
          action={
            <Grid container spacing={1}>
              <Grid item>
                <AccessTimeFilledIcon sx={{ color: 'white' }} />

                <Typography color="white" variant="h6" sx={{ fontWeight: 400 }} align="center">
                  Watch Later
                </Typography>
              </Grid>
              <Grid item>
                <ShareIcon sx={{ color: 'white' }} />
                <Typography color="white" variant="h6" sx={{ fontWeight: 400 }}>
                  Share
                </Typography>
              </Grid>
            </Grid>
          }
          title={
            <Typography variant="h6" color="white">
              KyU CU Sermon
            </Typography>
          }
        />
        <Box pt={15} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <YouTubeIcon sx={{ color: 'red' }} fontSize="large" />
        </Box>
      </Box>
      <CardContent>
        <Typography variant="h4" gutterBottom color="#2E002E">
          Lorem ipsum dolor sit
        </Typography>
        <Typography variant="h6" color="#008000">
          Lorem ipsum dolor sit
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResourcesSermon;
