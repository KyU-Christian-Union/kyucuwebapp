import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import PostsCard from './PostsCard';

const RecentPosts = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/resources');
  }

  return (
    <div>
      <Container maxWidth="lg" component="div" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h1" align="center" gutterBottom sx={{ marginTop: 8 }}>
          Recent Posts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard
              title="Lorem Ipsum dolor"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus. Malesuada hendrerit velit odio ut a est viverra proin porta Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus. Malesuada hendrerit velit odio ut a est viverra proin portal Malesuada hendrerit velit odio ut a est viverra proin porta Lorem ipsum dolor sit amet..."
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6}>
            <PostsCard
              title="Lorem Ipsum dolor"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus. Malesuada hendrerit velit odio ut a est viverra proin porta Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, dignissim pulvinar a, ridiculus vel penatibus. Malesuada hendrerit velit odio ut a est viverra proin portal Malesuada hendrerit velit odio ut a est viverra proin porta Lorem ipsum dolor sit amet..."
            />
          </Grid>
        </Grid>

        <Button variant="contained" onClick={handleClick} sx={{ margin: 3 }}>
          View More
        </Button>
      </Container>
    </div>
  );
};

export default RecentPosts;
