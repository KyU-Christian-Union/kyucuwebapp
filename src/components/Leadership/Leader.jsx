import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import leaderImage from '../../assets/images/leader1.png';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  leaderheader: {
    h4: theme.typography.h4,
    fontWeight: '900',
    fontSize: '15'
  }
}));
const Leader = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia height="140">
          <img className={classes.media} src={leaderImage} alt="leaderImage" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.leaderheader}>
            Amos Koine
          </Typography>
          <Typography variant="body1" align="center">
            Chairperson
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Leader;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import leaderImage from '../../assets/images/leader1.png';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   }
// });

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Chairperson"
//           height="140"
//           image="../../assets/images/leader1.png"
//           title="Amos Koine"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Amos Koine
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Chairperson
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// // import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import ImageList from '@material-ui/core/ImageList';
// // import ImageListItem from '@material-ui/core/ImageListItem';
// // import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// // import itemData from './itemData';

// // const useStyles = makeStyles({
// //   root: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-evenly',
// //     alignContent: 'center',
// //     overflow: 'hidden'
// //   },
// //   imageList: {
// //     width: 500,
// //     height: 450
// //   }
// // });

// // export default function TitlebarImageList() {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <ImageList rowHeight={180} className={classes.imageList}>
// //         <ImageListItem style={{ width: 'auto' }} />
// //         {itemData.map(item => (
// //           <ImageListItem key={item.img}>
// //             <img src={item.img} alt={item.name} />
// //             <ImageListItemBar title={item.name} subtitle={<span> {item.position}</span>} />
// //           </ImageListItem>
// //         ))}
// //       </ImageList>
// //     </div>
// //   );
// // }
