import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import eventsHeader from '../../assets/images/eventspageheader_image.jpg';
import ResourcesArticles from '../../components/Resources/ResourcesArticles';
import ResourcesSermons from '../../components/Resources/ResourcesSermons';

const useStyles = makeStyles(theme => ({
  resourcesImage: {
    width: '100%',
    height: '70vh',
    filter: 'blur(4px)',
    objectFit: 'cover'
  },
  resourcesImageParent: {
    position: 'relative'
  },
  resourcesLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:active': {
      borderTop: `5px solid ${theme.palette.primary.main}`,
      fontWeight: 800
    },
    '&:focus': {
      borderTop: `5px solid ${theme.palette.primary.main}`
    }
  },

  resourcesTypography: {
    cursor: 'pointer'
  }
}));

const ResourcePage = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  return (
    /// Always use the container as the root element
    <>
      <PublicAppBar />
      <div className={classes.resourcesImageParent}>
        <img src={eventsHeader} alt="resources_pic" className={classes.resourcesImage} />
        <Typography
          variant="h1"
          align="center"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            color: 'white',
            fontWeight: 800
          }}
        >
          Resources
        </Typography>
      </div>
      <Box component="div" pt={10} pb={10} sx={{ backgroundColor: '#EEEEEE' }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 900 }}>
          ARTICLES AND SERMONS
        </Typography>
      </Box>

      <Container maxWidth="lg" disableGutters>
        <Grid container direction="column">
          <Grid container spacing={0} mt={5} justifyContent="space-evenly" alignItems="center">
            <Link to={`${url}/articles`} className={classes.resourcesLink}>
              <Typography variant="h2" sx={{}} className={classes.resourcesTypography}>
                Articles
              </Typography>
            </Link>
            <Link to={`${url}/sermons`} className={classes.resourcesLink}>
              <Typography variant="h2" className={classes.resourcesTypography}>
                Sermons
              </Typography>
            </Link>
          </Grid>
          <Grid container spacing={0}>
            <Switch>
              <Route exact path={`${path}/`} component={ResourcesSermons} />
              <Route exact path={`${path}/sermons`} component={ResourcesSermons} />
              <Route exact path={`${path}/articles`} component={ResourcesArticles} />
            </Switch>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default ResourcePage;
