import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  churchDiv: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  churchButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '15px'
  },
  churchHeader: {
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
      fontWeight: 900
    }
  }
}));
const EverydayChurch = () => {
  const classes = useStyles();
  return (
    <div className={classes.churchDiv}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom="true" className={classes.churchHeader}>
          Everyday Church
        </Typography>
        <Typography variant="h5" gutterBottom="true" sx={{ fontWeight: 500 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
          Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida. Purus risus et tellus, lectus
          in. Ullamcorper nunc at odio faucibus habitant.
        </Typography>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
          <Button className={classes.churchButton}>JOIN US FOR A SERVICE</Button>
        </Box>
      </Container>
    </div>
  );
};

export default EverydayChurch;
