import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SongCards from './SongCards'

const Wrapper = styled.section`
  .songs-grid {
    background-color: var(--color-black);
    width: 100%;
    /* padding: 2rem; */
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 2rem 1rem 2rem 2rem;
    overflow: hidden;
    border-bottom: 1px solid #34C94B;
}
.songs-grid.collapsed {
    max-height: 260px;
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

const SongsSection = () => {
    const [topAlbumsList, setTopAlbumsList] = useState([]);
    const [newAlbumsList, setNewAlbumsList] = useState([]);
    const [isTopCollapsed, setIsTopCollapsed] = useState(true);
    const [isNewCollapsed, setIsNewCollapsed] = useState(true);
    useEffect(() => {
      fetch('https://qtify-backend-labs.crio.do/albums/top')
        .then(response => response.json())
        .then(data => setTopAlbumsList(data))
        .catch(error => console.log(error));
      fetch('https://qtify-backend-labs.crio.do/albums/new')
        .then(response => response.json())
        .then(data => setNewAlbumsList(data))
        .catch(error => console.log(error));
    }, [])
  return (
      <Wrapper>
      <div className="section-header">
        <p style={{fontSize: '1.25rem',fontWeight: 600}}>Top Albums</p>
        <p className='collasable' onClick={()=>setIsTopCollapsed(!isTopCollapsed)}>{isTopCollapsed ? 'Expand' : 'Collapse'}</p>
      </div>
      <div className={`songs-grid ${isTopCollapsed && 'collapsed'}`}>
        {topAlbumsList?.map((item) => (
          <SongCards data={item} key={item.id}/>
        ))}
      </div>
      <div className="section-header">
        <p style={{fontSize: '1.25rem',fontWeight: 600}}>New Albums</p>
        <p className='collasable' onClick={()=>setIsNewCollapsed(!isNewCollapsed)}>{isNewCollapsed ? 'Expand' : 'Collapse'}</p>
      </div>
      <div className={`songs-grid ${isNewCollapsed && 'collapsed'}`}>
        {newAlbumsList?.map((item) => (
          <SongCards data={item} key={item.id}/>
        ))}
      </div>
      </Wrapper>
  );
}

export default SongsSection