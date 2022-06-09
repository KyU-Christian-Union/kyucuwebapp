import { Box, Button, Divider, Hidden, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import GoogleIcon from '../../assets/images/google-icon.png';
import Logo from '../../assets/images/culogo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative'
        // justifyContent: 'center',
      }}
    >
      <div style={{ backgroundColor: '#F4F5F7', height: '100vh', padding: 40 }}>
        <Hidden mdDown>
          <img src={Logo} alt="cuLogo" style={{ position: 'absolute', left: 0, top: 0, height: '70px' }} />
        </Hidden>
        <Typography align="left" variant="h1">
          Register
        </Typography>
        <Typography align="left" gutterBottom variant="body2" sx={{ marginBottom: 5 }}>
          Create your KyU CU account
        </Typography>
        <form style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <TextField
              color="primary"
              focused
              variant="outlined"
              label="First Name"
              sx={{ marginRight: 2 }}
              placeholder="Type Something"
            />
            <TextField color="primary" focused variant="outlined" label="Last Name" placeholder="Type Something" />
          </div>
          <TextField
            color="primary"
            focused
            variant="outlined"
            label="Email"
            placeholder="Type Something"
            value={email}
            sx={{ width: '100%', marginTop: 3, backgroundColor: 'white' }}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            value={password}
            color="primary"
            placeholder="Type Something"
            focused
            sx={{ width: '100%', marginTop: 3, backgroundColor: 'white' }}
            onChange={event => setPassword(event.target.value)}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}>
            <input type="checkbox" />
            <Typography sx={{ fontWeight: 200, color: 'gray' }}>I agree with the terms of use</Typography>
          </div>
          <Box mt={5} sx={{ display: 'flex' /* , alignItems: 'center' */, justifyContent: 'center' }}>
            <Button type="submit" color="primary" variant="contained" sx={{ width: '100%' }}>
              Register
            </Button>
          </Box>
        </form>
        <Box mt={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Divider sx={{ background: '#C4C4C4', width: '40%', margin: 1 }} />
          or
          <Divider sx={{ background: '#C4C4C4', width: '40%', margin: 1 }} />
        </Box>
        <Box mt={5} mb={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ fontSize: '100%', backgroundColor: 'white', color: 'primary.main' }}>
            <img src={GoogleIcon} alt="GoogleIcon" style={{ height: '30px', paddingRight: 3 }} />
            SIGN IN WITH GOOGLE
          </Button>
        </Box>
        <Typography align="left">
          Already have an account? <b style={{ color: '#800080' }}>Sign In</b>
        </Typography>
      </div>
    </Box>
  );
};

export default LoginPage;
