import { Typography, Box, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import makeStyles from '@mui/styles/makeStyles';
import Stack from '@mui/material/Stack';
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
      <CardActions className={classes.Card} sx={{ display: 'flex', flexDirection: 'column', height: '350px' }}>
        <Stack direction="row" spacing={5} sx={{ minWidth: '100%' }}>
          <Stack direction="row" spacing={1}>
            <YouTubeIcon sx={{ color: 'red' }} />
            <Typography variant="h6" color="white">
              KyU CU Sermon
            </Typography>
          </Stack>
          <Stack direction="row">
            <Stack>
              <AccessTimeFilledIcon sx={{ color: 'white' }} />
              <Typography color="white">Watch Later</Typography>
            </Stack>
            <Stack>
              <ShareIcon sx={{ color: 'white' }} />
              <Typography color="white">Share</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box mt={15} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <YouTubeIcon sx={{ color: 'red' }} fontSize="large" />
        </Box>
      </CardActions>
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
