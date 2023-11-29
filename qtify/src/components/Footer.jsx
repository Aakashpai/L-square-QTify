import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: var(--color-primary);
    align-items: center;
    height: 150px;
    color: var(--color-black);
`

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h3>Qtify</h3>
        <p>
          Qtify is a digital music service that gives you access to millions of
          songs and other content from creators all over the world.
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <h4>Addanki,India</h4>
        <h4>Qtify@gmail.com</h4>
        <h4>+91 7789874574254</h4>
      </div>
    </Wrapper>
  );
};

export default Footer;