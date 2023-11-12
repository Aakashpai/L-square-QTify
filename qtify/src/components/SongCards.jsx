import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';

const CardWrapper = styled.div`
    .card{
        width: 9rem;
        height: 3.5rem; 
        border-radius: 0.625rem;
        border: none;
        display: inline-table;
    }
    .card-body{
        background-color: var(--color-white);
        border-radius: 0.625rem;
        padding: 5px 10px;
        display: flex;
    }
    button{
        background-color: var(--color-black);
        color: var(--color-white);
        border: none;
        border-radius: 0.625rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    img{
        height: 10.625rem; 
        border-radius: 0.625rem 0.625rem 0rem 0rem;
    }
`

const SongCards = ({data}) => {
  return (
    <CardWrapper>
        <Card>
        <Card.Img src={data?.image} alt='album-img'/>
        <Card.Body style={{padding: '5px 10px'}}>
        <button>{`${data?.follows} Follows`}</button>
        </Card.Body>
        </Card>
    </CardWrapper>
  )
}

export default SongCards