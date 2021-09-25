import { CardHeader, Container, Typography, Card, ButtonGroup, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
// import { ArrowBack, ArrowForward} from '@mui/icons-material'

import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  ministries_header_text: {
    fontWeight: '600'
  },
  container_main_ministries: {
    width: '90vw',
    margin: '1rem auto',
    padding: '4rem 0'
  },
  cards_ministries_holder: {
    padding: '2rem .2rem',
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll',
    '& > *:not(:last-child)': {
      marginRight: '3rem'
    },
    '&::-webkit-scrollbar': {
      width: '0'
    }
  },
  card_ministries: {
    minWidth: '360px',
    maxWidth: '360px',
    height: '300px',
    padding: '1rem',
    boxShadow: '0 0 10px',
    transition: 'all .2s ease',
    '&:hover': {
      transform: 'scale(1.04)'
    }
  },
  text_ministries: {
    letterSpacing: '.1rem',
    lineHeight: '1.5'
  },
  btns_container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  btn_all: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});
const Ministries = () => {
  const classes = useStyles();
  const box = document.querySelector('#cards_ministries_holder');
  const backScroll = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      box.scrollBy({ left: 80, behavior: 'smooth' });
    }
  };
  const forwardScroll = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      box.scrollBy({ left: -80, behavior: 'smooth' });
    }
  };
  return (
    <div className={classes.container_main_ministries}>
      <Container>
        <Typography variant="h2" align="center" className={classes.ministries_header_text}>
          Our Ministries
        </Typography>
        <Container className={classes.cards_ministries_holder} id="cards_ministries_holder">
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>

          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>

          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>

          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>

          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>

          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
          </Card>
        </Container>
      </Container>
      {/* buttons */}
      <Container className={classes.btns_container}>
        <ButtonGroup className={classes.btn_group_ministries}>
          <Button className={classes.btn} onClick={backScroll} startIcon={<ArrowBack />} />
          <Button onClick={forwardScroll} startIcon={<ArrowForward />} />
        </ButtonGroup>
        <Button variant="contained" className={classes.btn_all}>
          All Ministries &rarr;
        </Button>
      </Container>
    </div>
  );
};
export default Ministries;
