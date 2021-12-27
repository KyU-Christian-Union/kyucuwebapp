import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SermonImage from '../../assets/images/sermon_image.jpg';

const ResourcesSermon = () => {
  return (
    <Grid item p={2} direction="column" sx={{ color: 'white' }}>
      <Grid
        container
        sx={{
          backgroundImage: `url(${SermonImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/** name and icons */}
        <Grid container mb={8} p={2} justifyContent="space-between">
          <Typography variant="h5">Lorem ipsum dolor sit</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid mr={2}>
              <AccessTimeFilledIcon />
              <Typography>watch</Typography>
            </Grid>
            <Grid>
              <ShareIcon />
              <Typography>share</Typography>
            </Grid>
          </Box>
        </Grid>
        {/** youtube icon */}
        <Grid container mb={8} justifyContent="center">
          <YouTubeIcon fontSize="large" />
        </Grid>
        {/** watch on youtube */}
        <Grid container pl={2} mb={2} alignItems="center">
          <Typography variant="h6">Watch on</Typography>
          <YouTubeIcon />
          <Typography variant="h6">Youtube</Typography>
        </Grid>
      </Grid>
      <Grid container mt={2} sx={{ color: 'black' }}>
        <Typography gutterBottom variant="h3" sx={{ fontWeight: 800 }}>
          Lorem ipsum dolor sit
        </Typography>
      </Grid>
      <Grid container sx={{ color: 'black' }}>
        <Typography variant="h5" sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResourcesSermon;
