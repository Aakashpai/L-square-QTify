import React from 'react'
import headphone from '../assets/vibrating-headphone-1.png'
import styled from 'styled-components'

const HeroSectionWrapper = styled.div`
    width: 100%;
    height: 16.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
    p{
        color: var(--color-white);
        text-align: center;
        font-size: 2rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-right: 2rem;
    }
`

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
        <div>
            <p>100 Thousand Songs, ad-free <br/> Over thousands podcast episodes</p>
        </div>
        <div>
            <img src={headphone} alt='headphones' />
        </div>
    </HeroSectionWrapper>
  )
}

export default HeroSection