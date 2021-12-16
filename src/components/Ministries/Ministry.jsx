import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    padding: '.2rem',
    marginBottom: '0',
    paddingTop: '1rem'
  },
  sub_head: {
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  ministries_card: {
    minWidth: '20rem',
    maxWidth: '20rem',
    paddingBottom: '10px',
    marginRight: '2rem',
    transition: 'all .4s ease',
    '&:hover': {
      transform: 'scale(1.04)'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '15rem',
      maxWidth: '15rem'
    }
  },
  ministries_text: {
    maxHeight: '11.3rem',
    paddingTop: '.5rem',
    lineHeight: '1.8',
    letterSpacing: '1.8px',
    overflow: 'hidden',
    display: '-webkit-box',
    boxOrient: 'vertical',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': '7',
    '-webkit-box-orient': 'vertical'
  },
  btn_read_more: {
    paddingBottom: '0',
    color: 'purple',
    fontWeight: 'bold'
  }
}));
const Ministry = ({ subHead, text }) => {
  const history = useHistory();
  const navigateToMinistries = () => {
    history.push('/ministries');
  };
  const classes = useStyles();
  return (
    <Card className={classes.ministries_card} raised>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography className={classes.sub_head} align="center" variant="h4">
            {subHead}
          </Typography>
        }
      />
      <CardContent className={classes.ministries_text}>
        <Typography align="justify">{text}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={navigateToMinistries} className={classes.btn_read_more}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
};

export default Ministry;
