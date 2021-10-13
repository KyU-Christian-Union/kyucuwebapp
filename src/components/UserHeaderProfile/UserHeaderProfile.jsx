import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Avatar, IconButton } from '@mui/material';

import { useSelector } from 'react-redux';

// import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';

const UserHeaderProfile = () => {
  //   const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //   REDU
  const { currentUser } = useSelector(state => state.userState);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const signOut = async () => {
  //     try {
  //       await auth.signOut();
  //       handleClose();
  //       history.push('/');
  //     } catch (error) {
  //       // TODO: Show an Error message
  //     }
  //   };
  //   const signIn = async () => {
  //     await signInWithGoogle();
  //     history.push('/user');
  //   };
  return (
    <div>
      {currentUser ? (
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="primary"
          size="large"
        >
          <Avatar alt={currentUser.fullName} src={currentUser.photo} />
        </IconButton>
      ) : (
        <>
          <Button size="medium" variant="contained" color="primary">
            Register
          </Button>
        </>
      )}

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem component={RouterLink} to="/user/profile">
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/user">
          Dashboard
        </MenuItem>
        <MenuItem
        // onClick={signOut}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserHeaderProfile;
