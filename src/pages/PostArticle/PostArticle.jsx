import React from 'react';
import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import makeStyles from '@mui/styles/makeStyles';
import PostImage from '../../assets/images/post_image.jpg';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';
import PostsCard from '../../components/RecentPosts/PostsCard';

const useStyles = makeStyles(theme => ({
  postArticleContainer: {
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  }
}));

const PostArticle = () => {
  const classes = useStyles();
  return (
    <>
      <PublicAppBar />
      <Container maxWidth="lg" className={classes.postArticleContainer}>
        <Card>
          <CardMedia component="img" height="500" image={PostImage} alt="postarticle" sx={{ objectFit: 'cover' }} />
          <CardContent sx={{ backgroundColor: '#FDFDFD' }}>
            <Typography variant="h2" align="center" gutterBottom pt={3} mb={3} sx={{ fontWeight: 700 }}>
              Lorem ipsum dolor sit
            </Typography>
            <Typography variant="h6" align="justify" gutterBottom sx={{ color: '#008000' }}>
              3 minute read
            </Typography>
            <Typography variant="h5" p={3} align="justify" sx={{ fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie enim eu nibh aliquam dignissim eget
              cursus ut. Condimentum at aliquam ornare velit sed dictum. Cursus vitae eget amet, integer in amet. Odio
              dictumst et pellentesque pulvinar commodo tristique. Cursus elit interdum mauris egestas. Molestie
              scelerisque mattis eu congue cursus. Urna massa purus luctus cras urna euismod integer vulputate
              consectetur. Ac in cras vel non ut ultrices vitae accumsan facilisis. Donec sit feugiat est nec. Neque,
              interdum quis sem nunc sem ipsum, mauris, dignissim. At pharetra ut vitae vulputate viverra donec. Aenean
              consectetur aenean diam justo, lectus tempor ullamcorper. Accumsan, risus, rhoncus mollis tortor accumsan
              quis. Faucibus non nulla rhoncus ut. Pellentesque habitasse tellus urna cursus massa cras massa. Ipsum,
              vitae ipsum arcu, enim morbi eu, in rhoncus. Tincidunt at magna velit eu sed facilisi. Massa tristique
              adipiscing quisque pharetra risus interdum aliquam. Rhoncus, ultrices risus eu venenatis scelerisque.
              Diam, tellus id posuere quis. Montes, etiam dictum vel egestas amet eget ultricies pretium. Elementum in
              cum et vulputate nulla. Fermentum adipiscing vulputate consequat varius risus, orci, quisque tristique
              est. Ut vel sed non mattis condimentum. Mauris, nulla nunc eu proin adipiscing. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Molestie enim eu nibh aliquam dignissim eget cursus ut. Condimentum at
              aliquam ornare velit sed dictum. Cursus vitae eget amet, integer in amet. Odio dictumst et pellentesque
              pulvinar commodo tristique. Cursus elit interdum mauris egestas. Molestie scelerisque mattis eu congue
              cursus. Urna massa purus luctus cras urna euismod integer vulputate consectetur. Ac in cras vel non ut
              ultrices vitae accumsan facilisis. Donec sit feugiat est nec. Neque, interdum quis sem nunc sem ipsum,
              mauris, dignissim. At pharetra ut vitae vulputate viverra donec. Aenean consectetur aenean diam justo,
              lectus tempor ullamcorper. Accumsan, risus, rhoncus mollis tortor accumsan quis. Faucibus non nulla
              rhoncus ut. Pellentesque habitasse tellus urna cursus massa cras massa. Ipsum, vitae ipsum arcu, enim
              morbi eu, in rhoncus. Tincidunt at magna velit eu sed facilisi. Massa tristique adipiscing quisque
              pharetra risus interdum aliquam. Rhoncus, ultrices risus eu venenatis scelerisque. Diam, tellus id posuere
              quis. Montes, etiam dictum vel egestas amet eget ultricies pretium. Elementum in cum et vulputate nulla.
              Fermentum adipiscing vulputate consequat varius risus, orci, quisque tristique est. Ut vel sed non mattis
              condimentum. Mauris, nulla nunc eu proin adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Molestie enim eu nibh aliquam dignissim eget cursus ut. Condimentum at aliquam ornare velit sed
              dictum. Cursus vitae eget amet, integer in amet. Odio dictumst et pellentesque pulvinar commodo tristique.
              Cursus elit interdum mauris egestas. Molestie scelerisque mattis eu congue cursus. Urna massa purus luctus
              cras urna euismod integer vulputate consectetur. Ac in cras vel non ut ultrices vitae accumsan facilisis.
              Donec sit feugiat est nec. Neque, interdum quis sem nunc sem ipsum, mauris, dignissim. At pharetra ut
              vitae vulputate viverra donec. Aenean consectetur aenean diam justo, lectus tempor ullamcorper. Accumsan,
              risus, rhoncus mollis tortor accumsan quis. Faucibus non nulla rhoncus ut. Pellentesque habitasse tellus
              urna cursus massa cras massa. Ipsum, vitae ipsum arcu, enim morbi eu, in rhoncus. Tincidunt at magna velit
              eu sed facilisi. Massa tristique adipiscing quisque pharetra risus interdum aliquam. Rhoncus, ultrices
              risus eu venenatis scelerisque. Diam, tellus id posuere quis. Montes, etiam dictum vel egestas amet eget
              ultricies pretium. Elementum in cum et vulputate nulla. Fermentum adipiscing vulputate consequat varius
              risus, orci, quisque tristique est. Ut vel sed non mattis condimentum. Mauris, nulla nunc eu proin
              adipiscing.
            </Typography>
          </CardContent>
        </Card>
        <Divider sx={{ backgroundColor: '#C4C4C4', height: '2px', marginTop: 5 }} />
        <Box mt={2} mb={2}>
          <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ color: '#2E002E' }}>
              Related Articles
            </Typography>
            <Typography variant="h6" sx={{ color: '#008000' }}>
              {/** set as link */}
              See All
            </Typography>
          </Box>
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
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PostArticle;
