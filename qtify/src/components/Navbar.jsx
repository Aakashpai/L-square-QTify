import React from 'react';
import logo from '../assets/Qtify_logo.png'
import styled from 'styled-components'
import Button from './Button';
import SearchBox from './SearchBox';

const NavWrapper = styled.div`
  background-color: var(--color-primary);
  height: 4.625rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  nav{
    width: 97%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button{
    background-color: var(--color-black);
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    font-family: 'Poppins', sans-serif;
    padding: 0.625rem 1rem;
    border-radius: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
  input{
    border-radius: 0.5rem;
    width: 35.5rem;
    height: 3rem; 
    outline: none;
    border: 1px solid var(--color-black);
    padding: 0 1rem;
    padding-right: 2.3rem;
  }
  .icon-box{
    position: relative;
    right: 2.3rem;
    height: 3rem; 
    border-left: 1px solid var(--color-black);
    i{
      position: absolute;
      transform: translate(50%,50%);
    }
  }
`


const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <img src={logo} alt='logo' />
        <SearchBox placeholder='Search a album of your choice' />
        <Button text='Give Feedback'/>
      </nav>
    </NavWrapper>
  );
}

export default Navbar