import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  sub_head: {
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  ministries_card: {
    minWidth: '20rem',
    maxWidth: '20rem',
    paddingBottom: '10px',
    marginRight: '2rem',
    // boxShadow: '0 0 10px',
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
    maxHeight: '11.5rem',
    overflow: 'hidden',
    display: '-webkit-box',
    lineClamp: '7',
    boxOrient: 'vertical',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': '6',
    '-webkit-box-orient': 'vertical'
  },
  btn_read_more: {
    paddingBottom: '0',
    color: 'purple',
    fontWeight: 'bold'
  }
}));
const Ministry = ({ subHead, text }) => {
  const navigate = useNavigate();
  const navigateToMinistries = () => {
    navigate('/ministries');
  };
  const classes = useStyles();
  return (
    <Card className={classes.ministries_card} raised>
      <CardHeader
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
