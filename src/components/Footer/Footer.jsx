import React from 'react';
import { Grid, Divider, Container, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(5)
  },
  footerHeader: {
    color: 'white',
    fontSize: theme.typography.h6.fontSize,
    marginBottom: theme.spacing(3)
  },
  footerTypography: {
    color: '#C5C6D0',
    fontSize: '0.9rem',
    fontWeight: 400
  },
  footerIcon: {
    color: theme.palette.common.white
  },
  gridContainer: {
    marginTop: theme.spacing(0.6)
  },
  textInput: {
    border: '1px solid rgba(128, 0, 128, 1)',
    outline: 'none',
    padding: theme.spacing(0.1)
  },
  input: {
    color: 'white',
    textAlign: 'center'
  },
  divider: {
    background: '#808080',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  gridBottom: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footerContainer}>
      <Grid container spacing={2}>
        {/** Get In Touch With Us grid */}
        <Grid item xs={12} sm={6} md={4} lg={3} direction="column">
          <Typography variant="h6" className={classes.footerHeader}>
            GET IN TOUCH WITH US
          </Typography>
          {/** phone icon and contact */}
          <Grid container spacing={2}>
            <Grid item>
              <PhoneIcon className={classes.footerIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>+254791342771</Typography>
            </Grid>
          </Grid>
          {/* email icon and email */}
          <Grid container spacing={2}>
            <Grid item>
              <EmailIcon className={classes.footerIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>info@kyucu.co.ke</Typography>
            </Grid>
          </Grid>
          {/** location icon and location */}
          <Grid container spacing={2}>
            <Grid item>
              <LocationOnIcon className={classes.footerIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>P.O.Box 183-10303 Keruguya</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/** Sunday Services Grid */}
        <Grid item xs={12} sm={6} md={4} lg={3} direction="column">
          <Typography variant="h6" className={classes.footerHeader}>
            SUNDAY SERVICES
          </Typography>

          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography className={classes.footerTypography}>Morning Devotion:6AM-7AM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>1st Service:7AM-9AM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>2nd Service:9AM-11AM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>Intercessory:7PM-8PM</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/** Weekday Fellowships grid */}
        <Grid item xs={12} sm={6} md={4} lg={3} direction="column">
          <Typography variant="h6" className={classes.footerHeader}>
            WEEKDAY FELLOWSHIPS
          </Typography>
          <Grid className={classes.gridWrapper} container spacing={2} direction="column">
            <Grid item>
              <Typography className={classes.footerTypography}>Mon: Bible Study 7PM-8PM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>Tue: Evangelism 7PM-8PM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>Wed: Discipleship 7PM-8PM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>Thur: Bible Study 7PM-8PM</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.footerTypography}>Fri: Night Service 7PM-8PM</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/** Newsletter grid */}
        <Grid item xs={12} sm={6} md={4} lg={3} direction="column">
          <Typography variant="h6" className={classes.footerHeader}>
            NEWSLETTER
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Typography className={classes.footerTypography}>
                Subscribe to our newsletter to get the latest news to your inbox.
              </Typography>
              {/** remove gridwrapper classname */}
              <Grid container spacing={2} className={`${classes.gridWrapper} ${classes.gridContainer}`}>
                <Grid item>
                  <TextField
                    placeholder="Email Address"
                    type="email"
                    className={classes.textInput}
                    InputProps={{ className: classes.input, disableUnderline: true }}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container alignItems="center" justifyContent="space-around" className={classes.gridBottom}>
        <Grid item>
          <Typography variant="h6" className={classes.footerTypography}>
            @2021 Kirinyaga University Christian Union. All rights reserved.
          </Typography>
        </Grid>
        <Grid item style={{ display: 'flex' }}>
          <Grid item align="center">
            <IconButton>
              <InstagramIcon className={classes.footerIcon} />
            </IconButton>
          </Grid>
          <Grid item align="center">
            <IconButton>
              <TwitterIcon className={classes.footerIcon} />
            </IconButton>
          </Grid>
          <Grid item align="center">
            <IconButton>
              <FacebookIcon className={classes.footerIcon} />
            </IconButton>
          </Grid>
          <Grid item align="center">
            <IconButton>
              <YouTubeIcon className={classes.footerIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;