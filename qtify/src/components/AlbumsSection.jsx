import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SongCards from "./SongCards";
import axios from "axios";
import Carousel from "./Carousel";

const Wrapper = styled.section`
  .songs-grid {
    background-color: var(--color-black);
    width: 100%;
    /* padding: 2rem; */
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 2rem;
    overflow: hidden;
    border-bottom: 1px solid #34c94b;
  }
  .songs-grid.collapsed {
    max-height: 280px;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 0 2rem;
    margin-top: 2rem;
  }
  .collasable {
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const AlbumsSection = () => {
  const [topAlbumsList, setTopAlbumsList] = useState([]);
  const [newAlbumsList, setNewAlbumsList] = useState([]);
  const [isTopCollapsed, setIsTopCollapsed] = useState(false);
  const [isNewCollapsed, setIsNewCollapsed] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://qtify-backend-labs.crio.do/albums/top",
    })
      .then((data) => setTopAlbumsList(data.data))
      .catch((error) => console.log(error));

    axios({
      method: "get",
      url: "https://qtify-backend-labs.crio.do/albums/new",
    })
      .then((data) => setNewAlbumsList(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Wrapper isTopCollapsed={isTopCollapsed} isNewCollapsed={isNewCollapsed}>
      <div className="section-header">
        <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>Top Albums</p>
        <p
          className="collasable"
          onClick={() => setIsTopCollapsed(!isTopCollapsed)}
        >
          {isTopCollapsed ? "Expand" : "Collapse"}
        </p>
      </div>
      {isTopCollapsed ? (
        <Carousel
          data={topAlbumsList}
          renderCardComponent={(item) => (
            <SongCards data={item} type="album" key={item.id} />
          )}
        />
      ) : (
        <div className={`songs-grid ${isTopCollapsed && "collapsed"}`}>
          {topAlbumsList?.map((item) => (
            <SongCards data={item} type="album" key={item.id} />
          ))}
        </div>
      )}
      <div className="section-header">
        <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>New Albums</p>
        <p
          className="collasable"
          onClick={() => setIsNewCollapsed(!isNewCollapsed)}
        >
          {isNewCollapsed ? "Expand" : "Collapse"}
        </p>
      </div>
      {isNewCollapsed ? (
        <Carousel
          data={newAlbumsList}
          renderCardComponent={(item) => (
            <SongCards data={item} type="album" key={item.id} />
          )}
        />
      ) : (
        <div className={`songs-grid ${isNewCollapsed && "collapsed"}`}>
          {newAlbumsList?.map((item) => (
            <SongCards data={item} type="album" key={item.id} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default AlbumsSection;
