import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
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
  }
}));

const RecentPosts = () => {
  const classes = useStyles();
  return (
    <div className={classes.postsRoot}>
      <Container maxWidth="lg" component="div" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h2" className={classes.postsTypography} align="center">
          Recent Posts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard />
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard />
          </Grid>
        </Grid>
        <Link to="/resources">
          <Button variant="contained" className={classes.postsButton}>
            All Articles
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default RecentPosts;
