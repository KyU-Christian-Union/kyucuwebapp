import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLInk } from 'react-router-dom';
import { toggleHomeDrawer } from '../../redux/navigationSlice';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiDrawer-paper': {
      width: '200px',
      color: theme.palette.primary.main
    }
  }
}));
const PublicDrawer = () => {
  const classes = useStyles();
  const { homeDrawer } = useSelector(state => state.navigationState);
  const dispatch = useDispatch();
  const handleDrawer = () => {
    dispatch(toggleHomeDrawer());
  };
  return (
    <SwipeableDrawer open={homeDrawer} onClose={handleDrawer} onOpen={handleDrawer} className={classes.root}>
      <List>
        <ListItem button color="primary" component={RouterLInk} to="/">
          <ListItemText primary="Home" />
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button component={RouterLInk} to="/resources">
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={RouterLInk} to="/events">
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={RouterLInk} to="/">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={RouterLInk} to="/">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component={RouterLInk} to="/">
          <ListItemText primary="Give" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default PublicDrawer;
