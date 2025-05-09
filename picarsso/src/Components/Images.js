import React from "react";
import Slider from "react-slick";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import "../Styles/Images.css"

const images = [
  { src: p1, label: "img1"},
  { src: p2, label: "img2"},
  { src: p3, label: "img3"},
  { src: p4, label: "img4"},
  { src: p5, label: "img5"},
  { src: p6, label: "img6"},
  { src: p7, label: "img7"},
  { src: p8, label: "img8"},
  { src: p9, label: "img9"},
];

const Images = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
    <Typography variant='h4' component="div" gutterBottom sx={{marginTop: 4, padding: 2, borderRadius: 4, bgcolor: "#F1C40F", flexGrow:0}}>Images</Typography>
        <Box sx={{ width: "50%", mx: "auto", mt: 4, borderRadius: "40px"}}>
        <Slider {...settings}>
            {images.map((item, index) => (
                <Card key={index} sx={{ p: 1, backgroundColor: "#9B59B6"}}>
                <CardMedia
                component="img"
                height="500"
                image={item.src}
                alt={item.label}
                sx={{ objectFit: "contain", width: "100%", backgroundColor: "#9B59B6" }}
                />
            </Card>
            ))}
        </Slider>
        </Box>
    </>
  );
};

export default Images;