import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PostImage from '../../assets/images/post_image.jpg';

const ResourcesArticle = ({ title, subtitle }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  function handleClick() {
    history.push(`${url}/${title}`);
  }

  return (
    <>
      <Grid p={2} item xs={12} md={6} sm={6} lg={6} zeroMinWidth>
        <Card sx={{ backgroundColor: 'white' }}>
          <CardMedia component="img" height="250" image={PostImage} alt="article" sx={{ objectFit: 'cover' }} />
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6" noWrap="true" sx={{ fontWeight: 400 }}>
              {subtitle}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Read Article
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ResourcesArticle;
