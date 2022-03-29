import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Stack, Typography, CardMedia, CardContent, CardActions, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostImage from '../../assets/images/post_image.jpg';

const PostsCard = ({ title, subtitle }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/resources/articles/${title}`);
  }
  return (
    <Card sx={{ cursor: 'pointer' }} onClick={handleClick}>
      <CardMedia component="img" height="250" image={PostImage} alt="post" sx={{ objectFit: 'cover' }} />
      <CardContent sx={{ padding: '20px', backgroundColor: 'white' }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 800, color: '#800080' }}>
          {title}
        </Typography>
        <Divider sx={{ backgroundColor: '#800080', height: '2px' }} />
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 400,
            color: '#2E002E'
          }}
        >
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6">01/06/2021</Typography>

        <Stack direction="row">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <IconButton>
              <ChatBubbleIcon sx={{ color: '#33C722' }} />
            </IconButton>
            <Typography variant="h6">23</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <IconButton>
              <FavoriteIcon sx={{ color: '#33C722' }} />
            </IconButton>
            <Typography variant="h6">75</Typography>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PostsCard;
