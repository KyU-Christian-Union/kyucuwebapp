import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import leaderImage from '../../assets/images/leader1.png';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: '#EDEDED'
  },
  media: {
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  leaderheader: {
    h4: theme.typography.h4,
    fontWeight: '900'
  },
  leadersubheader: {
    h5: theme.typography.h5,
    fontWeight: '400'
  }
}));

const Leader = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} m={2}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={leaderImage} alt="leaderImage" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.leaderheader}>
            Amos Koine
          </Typography>
          <Typography variant="h5" align="center" className={classes.leadersubheader}>
            Chairperson
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Leader;
