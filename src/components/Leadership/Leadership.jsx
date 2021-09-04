import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Container, Grid } from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Leader from './Leader';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#EDEDED',
    width: 'auto'
  },
  heading: {
    h1: theme.typography.h1,
    fontWeight: '600',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5rem'
    }
  },
  button: {
    margin: 15,
    fontSize: 15
  }
}));

const Leadership = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h1" className={classes.heading} align="center">
        Our Leaders
      </Typography>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Leader />
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center">
        <MobileStepper
          variant="dots"
          steps={4}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 3}
              className={classes.button}
              color="primary"
            >
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className={classes.button}
              color="primary"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </Box>
    </Container>
  );
};

export default Leadership;
