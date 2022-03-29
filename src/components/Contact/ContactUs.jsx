import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, IconButton, Container, Box } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactPaper from './ContactPaper';
import Location from './Location';

export default function ContactUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    // code goes here
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Get In Touch With Us!
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: 3 }}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <ContactPaper Icon={<PhoneEnabledIcon />} Title="Phone" Subtitle="+254791342771" />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <ContactPaper Icon={<LocationOnIcon />} Title="Address" Subtitle="P. O. Box 183-1030 Kerugoya, Kenya" />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <ContactPaper Icon={<EmailIcon />} Title="Phone" Subtitle="info@kyucu.co.ke" />
          </Grid>
        </Grid>
        <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h2" align="center" gutterBottom>
            If You Got Any Questions
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Please Do Not Hesitate To Send Us A Message
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >
            <TextField
              color="secondary"
              variant="outlined"
              label="First/Last Name"
              value={name}
              sx={{ width: '60%', margin: 2, backgroundColor: 'white' }}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              label="you@example.com"
              type="email"
              value={email}
              sx={{ width: '60%', margin: 2, backgroundColor: 'white' }}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              color="secondary"
              variant="outlined"
              label="How can we help you"
              multiline
              rows={3}
              value={message}
              sx={{ width: '60%', margin: 2, backgroundColor: 'white' }}
              onChange={event => setMessage(event.target.value)}
            />
            <br />
            <Button type="submit" color="success" variant="contained">
              Send Message
            </Button>
          </form>
        </Box>
        <Box mt={8} mb={5}>
          <Typography variant="h2" align="center" gutterBottom>
            Connect With Us!
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 28 }}>
            <IconButton sx={{ backgroundColor: '#dcedc8' }} color="secondary" size="large">
              <FacebookIcon />
            </IconButton>

            <IconButton sx={{ backgroundColor: '#dcedc8' }} color="secondary" size="large">
              <InstagramIcon />
            </IconButton>

            <IconButton sx={{ backgroundColor: '#dcedc8' }} color="secondary" size="large">
              <TwitterIcon />
            </IconButton>

            <IconButton sx={{ backgroundColor: '#dcedc8' }} color="secondary" size="large">
              <YouTubeIcon />
            </IconButton>
          </div>
        </Box>
      </Container>
      <Location />
    </div>
  );
}
