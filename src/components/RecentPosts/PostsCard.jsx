import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import PostImage from '../../assets/images/post_image.jpg';

const PostsCard = ({ title, subtitle }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/resources/articles/${title}`);
  }
  return (
    <Card sx={{ margin: '10px' }}>
      <CardMedia component="img" height="250" image={PostImage} alt="post" sx={{ objectFit: 'cover' }} />
      <CardContent sx={{ padding: '20px', backgroundColor: '#C4C4C4' }}>
        <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#C4C4C4', paddingBottom: '30px' }}
      >
        <Button variant="contained" color="primary" onClick={handleClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostsCard;
