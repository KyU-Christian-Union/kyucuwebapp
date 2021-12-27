import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import PostsCard from './PostsCard';

const useStyles = makeStyles(theme => ({
  postsRoot: {
    backgroundColor: theme.palette.common.white,
    padding: 0
  },
  postsTypography: {
    fontWeight: '800',
    paddingTop: '10px',
    paddingBottom: '20px'
  },
  postsButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '22px',
    margin: theme.spacing(2)
  },
  recentPostsContainer: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  }
}));

const RecentPosts = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/resources');
  }
  const classes = useStyles();
  return (
    <div className={classes.postsRoot}>
      <Container
        maxWidth="lg"
        component="div"
        className={classes.recentPostsContainer}
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <Typography variant="h2" className={classes.postsTypography} align="center">
          Recent Posts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard
              title="Lorem Ipsum dolor"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus.
          Malesuada hendrerit velit odio ut a est viverra proin porta."
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard
              title="Lorem Ipsum dolor"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus.
          Malesuada hendrerit velit odio ut a est viverra proin porta."
            />
          </Grid>
        </Grid>

        <Button variant="contained" className={classes.postsButton} onClick={handleClick}>
          All Articles
        </Button>
      </Container>
    </div>
  );
};

export default RecentPosts;
