import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Leader from './Leader';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    flexGrow: 1
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
    <div>
      <Typography variant="h1" className={classes.heading} align="center">
        Our Leadership
      </Typography>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Leader />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Leader />
          </Grid>
        </Grid>
      </Container>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Leadership;
