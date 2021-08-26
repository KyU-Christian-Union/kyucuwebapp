import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CardActions, Typography } from '@material-ui/core';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: 10,
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
    <Card className={classes.root} m={2}>
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
