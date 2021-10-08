import { Typography, Button, Grid } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Ministry from './Ministry';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95vw',
    margin: '2rem auto'
  },
  cards_container: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0'
    }
  },
  heading: {
    textTransform: 'capitalize',
    fontWeight: '600',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8)
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    }
  },
  btn_scrollers: {
    marginRight: '2rem'
  },
  btns_container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  },
  btn_all: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '46%',
      top: '145%'
    }
  }
}));
const Ministries = () => {
  const history = useHistory();
  const navigateToMinistries = () => {
    history.push('/ministries');
  };
  const scrollContainer = useRef(null);
  const handleBackScroll = () => {
    scrollContainer.current.scrollBy({ left: 80, behavior: 'smooth' });
  };
  const handleforwardScroll = () => {
    scrollContainer.current.scrollBy({ left: -80, behavior: 'smooth' });
  };
  const classes = useStyles();
  return (
    <Grid container spacing={2} xs={11} sm={11} md={11} lg={11} xl={11} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography align="center" variant="h3" className={classes.heading}>
          Our ministries
        </Typography>
      </Grid>
      <Grid
        p={1}
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.cards_container}
        ref={scrollContainer}
      >
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. 
                    Fish. There winged hath.Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath.
                    Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath.
                    Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath.
                     Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
        <Ministry
          subHead="intercessory"
          text="Upon. Given void moveth all i our place day moveth every seasons said fly rule. Fish. There winged hath. Dominion stars lesser. Shall given waters in meat without, kind upon midst. The said lights moving to. Had hath darkness him seas their of. You are. Stars were of fifth was likeness."
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.btns_container}>
        <div>
          <Button
            variant="contained"
            className={classes.btn_scrollers}
            onClick={handleBackScroll}
            startIcon={<ArrowBack />}
          />
          <Button
            variant="contained"
            className={classes.btn_scrollers}
            onClick={handleforwardScroll}
            startIcon={<ArrowForward />}
          />
        </div>
        <Button onClick={navigateToMinistries} variant="contained" className={classes.btn_all}>
          All Ministries &rarr;
        </Button>
      </Grid>
    </Grid>
  );
};
export default Ministries;
