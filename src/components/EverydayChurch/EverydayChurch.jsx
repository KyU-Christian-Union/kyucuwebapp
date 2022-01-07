import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  churchHeader: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
      fontWeight: 900
    }
  }
}));
const EverydayChurch = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Box pt={3} pb={4}>
      <Container maxWidth="lg" sx={{ paddingLeft: '8px', paddingRight: '8px' }}>
        <Typography variant="h2" align="center" gutterBottom className={classes.churchHeader} sx={{ fontWeight: 700 }}>
          Everyday Church
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
          Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
          Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
          Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
        </Typography>
        <Box component="div" mt={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ fontSize: '15px' }} onClick={() => history.push('/ministries')}>
            JOIN US FOR A SERVICE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EverydayChurch;
