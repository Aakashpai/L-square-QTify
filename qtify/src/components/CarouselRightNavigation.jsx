import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 45%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
`

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <Wrapper>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </Wrapper>
  );
};

export default CarouselRightNavigation;