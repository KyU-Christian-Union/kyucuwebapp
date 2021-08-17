import {
  AppBar,
  Box,
  Link,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Menu
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/images/culogo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  toolRoot: {
    justifyContent: 'space-between'
  }
}));
const PublicAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} elevation={1} position="sticky" color="secondary">
      <Toolbar className={classes.toolRoot}>
        <Box display="flex" alignItems="center">
          <Hidden smUp>
            <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <RouterLink to="/">
            <img src={logo} width="40rem" alt="Main Logo" />
          </RouterLink>
        </Box>
        {/* Right Items  */}

        <Box display="flex" alignItems="center">
          <Hidden xsDown>
            <Link component={RouterLink} to="/">
              <Typography color="primary" className={classes.menuButton} variant="h6">
                Home
              </Typography>
            </Link>
            <Button color="primary">Our Services</Button>

            <Link component={RouterLink} to="/">
              <Typography color="primary" variant="h6" className={classes.menuButton}>
                How it Works
              </Typography>
            </Link>
            <Link component={RouterLink} to="/#faq">
              <Typography color="primary" variant="h6" className={classes.menuButton}>
                FAQs
              </Typography>
            </Link>
          </Hidden>
          {/* <LoginProfile /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PublicAppBar;
