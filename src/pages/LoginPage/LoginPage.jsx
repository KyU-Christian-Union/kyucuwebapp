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
        <Typography align="left" gutterBottom variant="h2">
          Sign In
        </Typography>
        <Typography align="left" gutterBottom variant="body2">
          Sign In to stay connected
        </Typography>
        <form style={{}}>
          <TextField
            color="primary"
            focused
            variant="outlined"
            label="Email"
            value={email}
            sx={{ width: '100%', marginTop: 2, backgroundColor: 'white' }}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            value={password}
            color="primary"
            focused
            sx={{ width: '100%', marginTop: 2, backgroundColor: 'white' }}
            onChange={event => setPassword(event.target.value)}
          />
          <Typography color="primary" sx={{ marginTop: 1, fontWeight: 700 }}>
            Forgot Password?
          </Typography>
          <Box mt={5} sx={{ display: 'flex' /* , alignItems: 'center' */, justifyContent: 'center' }}>
            <Button type="submit" color="primary" variant="contained" sx={{ width: '100%' }}>
              Sign In
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
          Don&apos;t have an account? <b style={{ color: '#800080' }}>Create One</b>
        </Typography>
      </div>
    </Box>
  );
};

export default LoginPage;
