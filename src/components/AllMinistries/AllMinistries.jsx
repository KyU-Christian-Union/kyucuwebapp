// this is what I will be exporting to the pages
import { Box, Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import MinistryCard from './MinistryCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: '1'
  },
  cards_containers_child: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    '&:nth-child(odd)': {
      backgroundColor: '#ccc'
    },
    '&>*:not(:last-child)': {
      marginRight: '7rem'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&>*:not(:last-child)': {
        marginRight: '0',
        marginBottom: theme.spacing(3)
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&>*:not(:last-child)': {
        marginRight: '0',
        marginBottom: theme.spacing(3)
      }
    }
  }
}));
const AllMinistries = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.cards_containers_child}>
        <MinistryCard
          subhead="discipleship ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
        <MinistryCard
          subhead="discipleship ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
      </Box>
      <Box className={classes.cards_containers_child}>
        <MinistryCard
          subhead="ICT ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
        <MinistryCard
          subhead="ushering ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
      </Box>
      <Box className={classes.cards_containers_child}>
        <MinistryCard
          subhead="intercessory ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
        <MinistryCard
          subhead="discipleship ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
      </Box>
      <Box className={classes.cards_containers_child}>
        <MinistryCard
          subhead="creative ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
        <MinistryCard
          subhead="music ministry"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
        />
      </Box>
    </Container>
  );
};
export default AllMinistries;
