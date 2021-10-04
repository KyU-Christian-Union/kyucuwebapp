import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

const useStyles = makeStyles(theme => ({
  imgStyle: {
    borderRadius: '10px',
    objectFit: 'cover'
  },
  containerStyle: {
    '& .MuiContainer-root': {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  },
  IconStyle: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2)
  },
  pageSubTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '29px'
    }
  },
  iconTypography: {
    fontWeight: 400,
    paddingLeft: theme.spacing(3),
    color: 'black',
    [theme.breakpoints.down('md')]: {
      fontSize: '17px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px'
    }
  },
  addToCalendar: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '10%'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2)
    }
  }
}));

const SpecificEventPage = () => {
  const classes = useStyles();
  return (
    <>
      <PublicAppBar />
      <Container maxWidth="lg" className={classes.containerStyle}>
        <Box component="div" sx={{ display: 'flex', mb: 4, mt: 5, alignItems: 'center' }}>
          <ArrowBackIcon sx={{ fontSize: 35, color: '#313131' }} />
          <Typography sx={{ ml: 1, fontWeight: 300, fontSize: '22px' }} variant="h5">
            BACK TO ALL EVENTS
          </Typography>
        </Box>
        {/** heading typography */}
        <Typography variant="h3" gutterBottom="true" className={classes.pageSubTitle} sx={{ mb: 4, fontWeight: 900 }}>
          Faith Nurture Classes
        </Typography>
        {/** specific event info */}
        <Grid container spacing={3} sx={{ pb: 2 }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={upcomingeventImage} alt="eventPicture" width="100%" height="100%" className={classes.imgStyle} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography
              variant="h5"
              sx={{ letterSpacing: '0px', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl quis vulputate imperdiet non tortor nunc
              netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales volutpat. At cras mattis phasellus id. Sem
              tortor in magna sed risus purus diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              quis vulputate imperdiet non tortor nunc netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales
              volutpat. At cras mattis phasellus id. Sem tortor in magna sed risus purus diam urna.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl quis vulputate imperdiet non tortor nunc netus. Lectus dolor orci
              urna ipsum neque, lacus cursus sodales volutpat. At cras mattis phasellus id. Sem tortor in magna sed
              risus purus diam urna.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          lg="6"
          md="6"
          sm="6"
          xs="12"
          sx={{ backgroundColor: '#EEEEEE', mt: 3, borderRadius: '10px', mb: 3, pb: 4 }}
        >
          <Grid item sx={{ display: 'flex' }} xs={12} md={12} lg={12}>
            <CalendarTodayIcon className={classes.IconStyle} />
            <Typography variant="h5" className={classes.iconTypography}>
              Wednesday, August 11, 2021
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex' }} xs={12} md={12} lg={12}>
            <AccessTimeIcon className={classes.IconStyle} />
            <Typography variant="h5" className={classes.iconTypography}>
              1:00 - 7:00 p.m.
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex' }} xs={12} md={12} lg={12}>
            <LocationOnIcon className={classes.IconStyle} />
            <Typography variant="h5" className={classes.iconTypography}>
              Main Hall
            </Typography>
            <Box
              component="div"
              className={classes.addToCalendar}
              sx={{ display: 'flex', alignItems: 'center', borderRadius: '25px', p: '5px', color: 'white' }}
            >
              <AddIcon />
              <Typography variant="h6" sx={{ fontSize: '13px' }}>
                ADD TO CALENDAR
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SpecificEventPage;
