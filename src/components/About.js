import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "cursive"}} variant="h2">This is a CRUD Application</Typography>
        <Typography sx={{ fontFamily: "cursive"}} variant="h2">By MERN Stack</Typography>
      </Box>
    </div>
  );
};

export default About;