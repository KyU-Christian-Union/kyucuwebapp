import { Container, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MinistryHeader from './MinistryHeader';
import MinistryDescription from './MinistryDescription';
import MinistryLeader from './MinistryLeader';
import Docket from './Docket';
import Join from './Join';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';
import PublicAppBar from '../../components/AppBars.jsx/PublicAppBar';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles(theme => ({
  dockets_holder: {
    '&>*': {
      display: 'flex',
      marginBottom: theme.spacing(2)
    },
    '&>*:nth-child(even)': {
      flexDirection: 'row-reverse'
    }
  }
}));

const MinistryDetails = ({ ministryName }) => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <PublicAppBar />
        <MinistryHeader ministryName={`${ministryName} ministry`} ministryMotto="evangelism through technology" />
        <MinistryDescription
          descriptionTitle="who we are"
          descriptionText="Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum 
                          aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!"
        />
        <MinistryLeader
          imageLink={upcomingeventImage}
          title="ministry leader"
          leaderMessage="Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum aut atque dolor at placeat repellendus laudantium cumque iusto eveniet nostrum dolorem ratione!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates est repellendus a! Fugiat, saepe perspiciatis natus voluptatum "
        />
        <Typography
          align="center"
          variant="h2"
          sx={{ textTransform: 'capitalize', marginBottom: '2rem' }}
        >{`${ministryName} ministry dockets`}</Typography>
        <Box className={classes.dockets_holder} p={1}>
          <Docket
            docketImageLink={upcomingeventImage}
            docketName="media"
            docketText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!"
          />
          <Docket
            docketImageLink={upcomingeventImage}
            docketName="publicity"
            docketText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!"
          />
          <Docket
            docketImageLink={upcomingeventImage}
            docketName="website"
            docketText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos perspiciatis quidem assumenda minus asperiores delectus necessitatibus et, repellendus eos!"
          />
        </Box>
        <Typography
          align="center"
          variant="h2"
          sx={{ textTransform: 'capitalize', marginBottom: '2rem' }}
        >{`Join ${ministryName} ministry`}</Typography>
        <Join />
      </Container>
      <Footer />
    </>
  );
};
export default MinistryDetails;
