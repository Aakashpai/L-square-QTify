import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 45%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
`

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <Wrapper>
      {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </Wrapper>
  );
};

export default CarouselLeftNavigation;