import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography } from '@mui/material';
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
    color: 'inherit'
  },
  resourcesTypography: {
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 800,
      borderTop: `5px solid ${theme.palette.primary.main}`
    }
  }
}));

const ResourcePage = () => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  return (
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
      <Box component="div" pt={10} pb={10} sx={{ backgroundColor: 'white' }}>
        <Typography variant="h2" align="center" sx={{ fontWeight: 900 }}>
          ARTICLES AND SERMONS
        </Typography>
      </Box>
      {/** articles and sermons */}
      <Box component="div" sx={{ backgroundColor: '#EEEEEE' }}>
        {/** articles and sermon links */}
        <Box component="div" p={10} sx={{ borderTop: '3px solid #C6C6C6', borderBottom: '3px solid #C6C6C6' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
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
          </Container>
        </Box>
      </Box>
      <Footer />

      <Switch>
        <Route path={`${path}/sermons`} component={ResourcesSermons} />
        <Route path={`${path}/articles`} component={ResourcesArticles} />
      </Switch>
    </>
  );
};

export default ResourcePage;
