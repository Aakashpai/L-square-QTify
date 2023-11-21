import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components';
import Chip from '@mui/material/Chip';

const CardWrapper = styled.div`
    cursor: pointer;
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
    .MuiChip-filled{
        background-color: var(--color-black);
        color: var(--color-white);
        height: 1.45rem;
    }
    .MuiChip-label{
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        padding: 0.25rem 0.5rem;
        line-height: normal;
    }
    img{
        height: 10.625rem; 
        border-radius: 0.625rem 0.625rem 0rem 0rem;
    }
    .title{
        color: #fff;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        padding-top: 0.38rem;
        margin: 0;
    }
`

const SongCards = ({data}) => {
  return (
    <CardWrapper>
        <Card>
        <Card.Img src={data?.image} alt='album-img'/>
        <Card.Body style={{padding: '5px 10px'}}>
        <Chip label={`${data?.follows} Follows`} />
        </Card.Body>
        </Card>
        <p className='title'>{data.title}</p>
    </CardWrapper>
  )
}

export default SongCards