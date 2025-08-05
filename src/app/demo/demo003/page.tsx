"use client"
import Image from 'next/image'
import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import SwiperSample from './swiperSample';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
};

export default function Demo003Page() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        show me the money.
      </Typography>
    
      <SwiperSample />
      
    </Container>
  )
}