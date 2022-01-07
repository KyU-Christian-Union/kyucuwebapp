import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';
import UpcomingEvent from '../../components/UpcomingEvents/UpcomingEvent';

const useStyles = makeStyles(theme => ({
  specificEventBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  specificEventImage: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  specificEventGrid: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  specificEventDetails: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  specificEventAdd: {
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  }
}));

const SpecificEventPage = () => {
  const classes = useStyles();
  return (
    <>
      <PublicAppBar />
      <Container maxWidth="lg">
        <Box mt={2} mb={2}>
          <Typography variant="h6" color="#008000" gutterBottom>
            Thursday, December 20, 2021
          </Typography>
          <Typography variant="h5" color="#2E002E" gutterBottom>
            Evangelism Weekend
          </Typography>
        </Box>
        <Box mb={3} sx={{ display: 'flex' }} className={classes.specificEventBox}>
          <img
            src={upcomingeventImage}
            alt="Event"
            style={{ objectFit: 'cover' }}
            className={classes.specificEventImage}
          />
          <Grid
            container
            className={classes.specificEventGrid}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%'
            }}
          >
            <Grid item sx={{ backgroundColor: '#FDFDFD', padding: 2 }} className={classes.specificEventGrid}>
              <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item>
                  <AccessTimeIcon sx={{ color: '#008000' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="#2E002E" sx={{ fontWeight: '400' }} gutterBottom>
                    Thursday, Nov 20, 2021
                  </Typography>
                  <Typography variant="h6" color="#2E002E" gutterBottom>
                    1:00 PM to 7:00 PM EAT
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item>
                  <LocationOnIcon sx={{ color: '#008000' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="#2E002E">
                    LH9, Main Campus
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={1}
                sx={{
                  alignItems: 'center',
                  backgroundColor: '#008000',
                  borderRadius: '10px',
                  marginTop: 2
                }}
              >
                <Grid item>
                  <AddIcon sx={{ color: 'white' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="white" sx={{ fontWeight: 400 }}>
                    ADD TO CALENDAR
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container sx={{ width: '50%' }} className={classes.specificEventDetails}>
          <Grid item>
            <Typography variant="h4" color="#2E002E" gutterBottom>
              Details
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="#2E002E" sx={{ fontWeight: '500' }} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl quis vulputate imperdiet non tortor nunc
              netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales volutpat. At cras mattis phasellus id. Sem
              tortor in magna sed risus purus diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              quis vulputate imperdiet non tortor nunc netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales
              volutpat. At cras mattis phasellus id. Sem tortor in magna sed risus purus diam urna.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nisl quis vulputate imperdiet non tortor nunc netus. Lectus dolor orci
              urna ipsum neque, lacus cursus sodales volutpat. At cras mattis phasellus id. Sem tortor in magna sed
              risus purus diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl quis vulputate
              imperdiet non tortor nunc netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales volutpat. At
              cras mattis phasellus id. Sem tortor in magna sed risus purus diam urna.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nisl quis vulputate imperdiet non tortor nunc netus. Lectus dolor orci urna
              ipsum neque, lacus cursus sodales volutpat. At cras mattis phasellus id. Sem tortor in magna sed risus
              purus diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl quis vulputate imperdiet non
              tortor nunc netus. Lectus dolor orci urna ipsum neque, lacus cursus sodales volutpat. At cras mattis
              phasellus id. Sem tortor in magna sed risus purus diam urna.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          className={classes.specificEventAdd}
          sx={{
            alignItems: 'center',
            backgroundColor: '#008000',
            borderRadius: '10px',
            marginTop: 2,
            width: '25%',
            marginBottom: 2
          }}
        >
          <Grid item>
            <AddIcon sx={{ color: 'white' }} />
          </Grid>
          <Grid item>
            <Typography color="white" sx={{ fontWeight: 400, fontSize: '14px' }}>
              ADD TO CALENDAR
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ height: '1px', backgroundColor: '#C4C4C4' }} />
        <Box mt={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" color="#2E002E">
            Similar Events
          </Typography>
          <Typography variant="h6" color="#008000">
            See all
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <UpcomingEvent />
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <UpcomingEvent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SpecificEventPage;
