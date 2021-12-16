import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardActions, Typography } from '@mui/material';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#EEEEEE' /* not same as theme.palette.background.default */
  },
  media: {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  eventheader: {
    h4: theme.typography.h4,
    fontWeight: '900',
    fontSize: '15'
  },
  cardActions: {
    flexDirection: 'column'
  },
  box: {
    width: '100%'
  },
  iconInfo: {
    marginLeft: 20
  }
}));

function UpcomingEvent() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={upcomingeventImage} alt="UpcomingEventImage" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.eventheader}>
            Evangelism Weekend
          </Typography>
          <CardActions className={classes.cardActions} disableSpacing>
            <Box className={classes.box} display="flex" alignItems="center" p={1}>
              <EventIcon />
              <Typography className={classes.iconInfo} ml={1}>
                12th-13th June 2021
              </Typography>
            </Box>
            <Box className={classes.box} display="flex" alignItems="center" p={1}>
              <LocationOnIcon />
              <Typography className={classes.iconInfo}>Kutus</Typography>
            </Box>
            <Box className={classes.box} display="flex" alignItems="center" p={1}>
              <ScheduleIcon />
              <Typography className={classes.iconInfo}>9AM-6PM</Typography>
            </Box>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UpcomingEvent;
