import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SongsSection from "./SongsSection";

const Wrapper = styled.div`
  .tabs-title {
    font: poppins;
    cursor: pointer;
    padding: 0px 30px;
    margin-bottom: 5px;
    color: var(--color-white);
  }
  .horizontal-border1 {
    border: 1px solid var(--color-primary);
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .horizontal-border2 {
    border: 1px solid var(--color-primary);
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Songs = () => {
  const [songsData, setSongsData] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <Wrapper>
      <div className="horizontal-border1"></div>
      <div>
        <h3 className="tabs-title">Songs</h3>
      </div>
      <SongsSection songsData={songsData} />
      <div className="horizontal-border2"></div>
    </Wrapper>
  );
};

export default Songs;