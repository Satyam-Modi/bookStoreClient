import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <br></br><br></br>
        <Typography sx={{ marginLeft: 2, fontFamily: "merriweather"}} variant="h4">I am Satyam Modi, Final Year Under Grad, persuing B.Tech in Electronics and Communication Engineering. This Web/App is a platform where any owner can share his/her product(BOOK) for sell. Here one can view, add, delete post and update their details like book name, author, description, price tag, image of the book. It is a basic book-store website.</Typography>
        <br></br><br></br><br></br><br></br>
        <Typography sx={{ fontFamily: "roboto slab"}} variant="h5">This project is developed on MERN Stack</Typography>
      </Box>
    </div>
  );
};

export default About;