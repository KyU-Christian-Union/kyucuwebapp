import { CardHeader, Container, Typography, Card, ButtonGroup, Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';

const useStyles = makeStyles(theme => ({
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
    padding: '1rem',
    boxShadow: '0 0 10px',
    transition: 'all .2s ease',
    '&:hover': {
      transform: 'scale(1.04)'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px',
      maxWidth: '300px'
    }
  },
  title_ministries: {
    width: '320px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  text_ministries: {
    letterSpacing: '.1rem',
    lineHeight: '1.5',
    height: '300px',
    overflow: 'hidden'
  },
  active: {
    height: 'auto'
  },
  btns_container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  btn_all: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('sm')]: {
      top: '170%'
    }
  },
  btn_read_more: {
    color: theme.palette.primary.dark,
    borderBottom: '2px solid purple',
    paddingBottom: '.2rem',
    fontWeight: 700
  }
}));
const Ministries = () => {
  const classes = useStyles();
  const scrollContainer = useRef(null);
  const backScroll = () => {
    scrollContainer.current.scrollBy({ left: 80, behavior: 'smooth' });
  };
  const forwardScroll = () => {
    scrollContainer.current.scrollBy({ left: -80, behavior: 'smooth' });
  };
  const handleReadMore = event => {
    const { active } = classes;
    const clicked = event.target;
    clicked.previousElementSibling.classList.toggle(active);
    clicked.parentNode.classList.toggle('active');
    if (clicked.previousElementSibling.classList.contains(active)) {
      clicked.innerText = 'Read Less';
    } else {
      clicked.innerText = 'Read More';
    }
  };
  return (
    <div className={classes.container_main_ministries}>
      <Container>
        <Typography variant="h2" align="center" className={classes.ministries_header_text}>
          Our Ministries
        </Typography>
        <Container className={classes.cards_ministries_holder} ref={scrollContainer}>
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
          </Card>
          <Card className={classes.card_ministries}>
            <CardHeader
              title={
                <Typography variant="h3" className={classes.title_ministries}>
                  Intercessory Lorem ipsum dolor sit.
                </Typography>
              }
            />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
          </Card>
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
          </Card>
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
          </Card>
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
          </Card>
          <Card className={classes.card_ministries}>
            <CardHeader title={<Typography variant="h3">Intercessory</Typography>} />
            <Typography className={classes.text_ministries}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse nulla in explicabo maiores,
              dignissimos blanditiis nostrum accusamus eum qui non ullam, vel iusto sequi, animi rem dolorum cumque ad.
            </Typography>
            <Button className={classes.btn_read_more} onClick={handleReadMore}>
              Read More
            </Button>
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
