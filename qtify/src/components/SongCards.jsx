import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 160px;
    height: 232px;
  .card {
    position: relative;
    width: 160px;
    height: 205px;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--color-white);
    display: flex;
    border: none;
    flex-direction: column;
  }
  img {
    height: 170px;
    width: 160px;
  }
  .banner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42px;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    padding: 6px;
  }

  .chip {
    color: var(--color-white) !important;
    background-color: var(--color-black) !important;
  }

  .toptitle {
    margin-top: 3px;
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const SongsCards = ({ data, type }) => {
    const getCard = (type) => {
      switch (type) {
        case "album": {
          const { image, title, follows, songs } = data;
          return (
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <Wrapper>
                <div className="card">
                  <img src={image} alt="album" />
                  <div className="banner">
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className="chip"
                    />
                  </div>
                </div>
                <div className="toptitle">
                  <p>{title}</p>
                </div>
              </Wrapper>
            </Tooltip>
          );
        }
        case "songs": {
          const { image, likes, title } = data;
          return (
            <Wrapper>
              <div className="card">
                <img src={image} alt="song" loading="lazy" />
                <div className="banner">
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className="chip"
                  />
                </div>
              </div>
              <div className="toptitle">
                <p>{title}</p>
              </div>
            </Wrapper>
          );
        }
        default:
          return null;
      }
    };
    return getCard(type);
  };
  
  export default SongsCards;