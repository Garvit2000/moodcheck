import React, { useState, createRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/swiper.min.css";

import "./App.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const [currentMood, setCurrentMood] = useState(0);

  const [items, setItems] = useState([
    {
      id: 1,
      mood: 1,
      text: "hjgdsgh",
      visibility: true,
      nodeRef: createRef(null),
    },
    {
      id: 2,
      mood: 1,
      text: "hdghs",
      visibility: true,
      nodeRef: createRef(null),
    },
    {
      id: 3,
      mood: 2,
      text: "ytwq",
      visibility: false,
      nodeRef: createRef(null),
    },
    {
      id: 4,
      mood: 2,
      text: "hjsavd",
      visibility: false,
      nodeRef: createRef(null),
    },
    {
      id: 5,
      mood: 3,
      text: "gfasa",
      visibility: false,
      nodeRef: createRef(null),
    },
    {
      id: 6,
      mood: 3,
      text: "udgw",
      visibility: false,
      nodeRef: createRef(null),
    },
    {
      id: 7,
      mood: 4,
      text: "dsahjgda",
      visibility: false,
      nodeRef: createRef(null),
    },
    {
      id: 8,
      mood: 4,
      text: "jhxvgas",
      visibility: false,
      nodeRef: createRef(null),
    },
  ]);

  function rearrangeList() {
    const rearrangedItems = items.map((item) => {
      if (item.mood === currentMood + 1) {
        return {
          ...item,
          visibility: true,
        };
      } else {
        return {
          ...item,
          visibility: false,
        };
      }
    });

    console.log(rearrangedItems);
    setItems(rearrangedItems);
  }

  return (
    <>
      <Swiper
        onSlideChange={(data) => {
          console.log("current slide: ", data?.activeIndex);

          setCurrentMood(data?.activeIndex);
          rearrangeList();
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

      <div className="content-container">
        <TransitionGroup>
          {items.map((item, id) => {
            if (item.visibility === true)
              return (
                // <CSSTransition key={item.id} timeout={300} classNames="fade">
                <CSSTransition
                  key={id}
                  nodeRef={item.nodeRef}
                  timeout={500}
                  classNames="item"
                >
                  <ListGroup ref={item.nodeRef}>
                    <li>{item.text}</li>
                  </ListGroup>
                </CSSTransition>
              );
            else return null;
          })}
        </TransitionGroup>
      </div>
    </>
  );
}
