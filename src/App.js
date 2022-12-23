import React, { useState, createRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Emotions from "./Emotions";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/swiper.min.css";

import "./App.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const [currentMood, setCurrentMood] = useState(0);


  const emotion1 = [
    "joy",
    "impressive",
    "cool",
    "amazing",
    "serene",
    "beautiful"
]
  const emotion2 = [
    "rage",
    "hate",
    "power",
    "alone",
    "fight",
    "high"
  ]
  const emotion3 = [
    "lonely",
    "depressed",
    "anxiety",
    "rejected",
    "dissappinted",
    "in grief"
  ]
  const emotion4 = [
    "super happy",
    "awesome",
    "rushing",
    "surprise",
    "dance",
    "great"
  ]

  function moveElement1() {
    document.getElementById("id1").style.transform = "rotate(7deg)"
    // const div1 = document.getElementById('id1');
    // const div4 = document.getElementById('id4');
    // const div3 = document.getElementById('id3');
    
    // div1.style.top = "101px";
    // div4.style.left = "-160px";
    // div3.style.top = "-101px";
    // div3.style.left = "160px"

    //div.style.left = "-50px";
  }
  function moveElement2() {
   //console.log("yes")
   document.getElementById("id1").style.transform = "rotate(-7deg)"
  }

  return (
    <div>
      <h2 className="howareu">How are you feeling today?</h2>
      <Swiper
        onSlideChange={(data) => {
          
          if(currentMood < data?.activeIndex){
            moveElement1();

          }
          else{
            moveElement2();
          }

          console.log(currentMood, data?.activeIndex);
          setCurrentMood(data?.activeIndex);
          
        }}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>Happy</SwiperSlide>
        <SwiperSlide>Angry</SwiperSlide>
        <SwiperSlide>Sad</SwiperSlide>
        <SwiperSlide>Excited</SwiperSlide>
      </Swiper>
      
      <div className="content container" >
          {<Emotions emotion1 = {emotion1} emotion2 = {emotion2} emotion3 = {emotion3} emotion4 = {emotion4} currentmood = {currentMood+1}/>}
      </div>

    </div>
  );
}
