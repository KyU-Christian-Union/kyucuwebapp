// this is what I will be exporting to the pages
import { Grid, Box } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import MinistryCard from './MinistryCard';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem auto'
  },
  cards_containers: {
    width: '100%',
    margin: 'auto',
    padding: '2rem',
    '&:nth-child(odd)': {
      backgroundColor: '#ccc'
    },
    [theme.breakpoints.down('md')]: {
      // padding: '0'
    }
  },
  cards_containers_child: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    margin: 'auto',
    '&>*:not(:last-child)': {
      marginRight: 'auto'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center',
      '&>*': {
        width: '100%',
        margin: '2rem auto',
        marginTop: '.3rem'
      },
      '&>*:not(:last-child)': {
        marginBottom: '2rem'
      }
    }
  }
}));
const AllMinistries = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={5} xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid item display="flex" className={classes.cards_containers}>
        <Box className={classes.cards_containers_child}>
          <MinistryCard
            subhead="ICT ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
          <MinistryCard
            subhead="discipleship ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Box>
      </Grid>
      <Grid item display="flex" className={classes.cards_containers}>
        <Box className={classes.cards_containers_child}>
          <MinistryCard
            subhead="ushering ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
          <MinistryCard
            subhead="intercessory ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Box>
      </Grid>
      <Grid item display="flex" className={classes.cards_containers}>
        <Box className={classes.cards_containers_child}>
          <MinistryCard
            subhead="music ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
          <MinistryCard
            subhead="creative ministry"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod repellendus corrupti incidunt aspernatur impedit. Ullam similique tempora veniam?"
          />
        </Box>
      </Grid>
      <Grid item display="flex" className={classes.cards_containers}>
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
      </Grid>
    </Grid>
  );
};
export default AllMinistries;
