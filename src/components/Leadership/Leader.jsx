// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// const tutorialSteps = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
//   },
//   {
//     label: 'Bird',
//     imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
//   },
//   {
//     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//     imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
//   }
// ];

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default
//   },
//   img: {
//     height: 255,
//     display: 'block',
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%'
//   }
// }));

// function SwipeableTextMobileStepper() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep(prevActiveStep => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(prevActiveStep => prevActiveStep - 1);
//   };

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
    maxWidth: 345
  },
  leaderheader: {
    h4: theme.typography.h4,
    fontWeight: '900',
    fontSize: '15'
  }
}));
const Leader = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={leaderImage} alt="leaderImage" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.leaderheader}>
            Amos Koine
          </Typography>
          <Typography variant="body1" align="center">
            Chairperson
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Leader;
