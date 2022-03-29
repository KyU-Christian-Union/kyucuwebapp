import {
  AppBar,
  Box,
  Link,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  //   Menu,
  Container
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/culogo.png';
import UserHeaderProfile from '../UserHeaderProfile/UserHeaderProfile';
import { toggleHomeDrawer } from '../../redux/navigationSlice';
import PublicDrawer from '../Drawers/PublicDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  toolBarRoot: {
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  loginLogoutBox: {
    marginLeft: theme.spacing(5)
  },
  containerRoot: {
    padding: 0
  }
}));
const PublicAppBar = () => {
  const classes = useStyles();

  //   REDUX
  const dispatch = useDispatch();
  return (
    <AppBar className={classes.root} elevation={1} position="sticky">
      <Container maxWidth="lg" className={classes.containerRoot} color="primary.dark">
        <Toolbar className={classes.toolBarRoot}>
          <Box display="flex" alignItems="center">
            <Hidden smUp>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                // Oclick Update Global State Open the Sidebar for Mobile View - Opposite is true
                onClick={() => dispatch(toggleHomeDrawer())}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <RouterLink to="/login">
              <img src={logo} width="40rem" alt="Main Logo" />
            </RouterLink>
          </Box>
          {/* Right Items  */}

          <Box display="flex" alignItems="center">
            <Hidden mdDown>
              <Link component={RouterLink} to="/">
                <Typography color="primary" className={classes.menuButton} variant="h6">
                  Home
                </Typography>
              </Link>
              <Link component={RouterLink} to="/ministries">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  Ministries
                </Typography>
              </Link>
              <Link component={RouterLink} to="/resources">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  Resources
                </Typography>
              </Link>
              <Link component={RouterLink} to="/events">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  Events
                </Typography>
              </Link>
              <Link component={RouterLink} to="/about">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  About
                </Typography>
              </Link>
              <Link component={RouterLink} to="/contactUs">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  Contact us
                </Typography>
              </Link>
              <Link component={RouterLink} to="/give">
                <Typography color="primary" variant="h6" className={classes.menuButton}>
                  Give
                </Typography>
              </Link>
            </Hidden>
            <div className={classes.loginLogoutBox}>
              <UserHeaderProfile />
            </div>
          </Box>
        </Toolbar>
        <PublicDrawer />
      </Container>
    </AppBar>
  );
};

export default PublicAppBar;
