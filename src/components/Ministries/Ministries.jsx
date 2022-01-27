import { Typography, Button, Grid, Container, IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Ministry from './Ministry';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2rem auto',
    padding: 0
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
  //   btn_scrollers: {
  //     marginRight: '2rem'
  //   },
  btns_container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
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
  const navigate = useNavigate();
  const navigateToMinistries = () => {
    navigate('/ministries');
  };
  const scrollContainer = useRef(null);
  const handleBackScroll = () => {
    scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
  };
  const handleforwardScroll = () => {
    scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3" className={classes.heading}>
            Our ministries
          </Typography>
        </Grid>
        <Grid
          p={3}
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
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.btns_container}>
            <IconButton onClick={handleforwardScroll} color="primary">
              <ArrowBack />
            </IconButton>
            <Button
              onClick={navigateToMinistries}
              variant="contained"
              // className={classes.btn_all}
            >
              All Ministries
            </Button>
            <IconButton onClick={handleBackScroll} color="primary">
              <ArrowForward />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Ministries;
