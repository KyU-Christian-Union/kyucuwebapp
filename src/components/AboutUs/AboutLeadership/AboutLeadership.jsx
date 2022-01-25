// this component is not reusable but am putting it in it's own file because of scalability

import React from 'react';
import { Paper } from '@mui/material';
import AboutLeader from './AboutLeader';
import zaph from '../../../assets/images/sermon_image.jpg';

const AboutLeadership = () => {
  return (
    <Paper className="about__leadership" elevation={0} style={{ backgroundColor: '#f0f0f0' }}>
      <AboutLeader
        leaderAvartar={zaph}
        leaderName="zaphenath paneah"
        leaderPosition="chairperson"
        leaderMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitantLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. "
      />
      <AboutLeader
        leaderAvartar={zaph}
        leaderName="Mary Doe"
        leaderPosition="assistant chairperson"
        leaderMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitant.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. Ullamcorper nunc at odio faucibus habitantLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra lacinia eu faucibus tellus gravida.
        Purus risus et tellus, lectus in. "
      />
    </Paper>
  );
};
export default AboutLeadership;
