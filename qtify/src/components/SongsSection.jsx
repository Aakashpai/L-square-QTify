import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "./Carousel";
import SongsCards from "./SongCards";
import styled from "styled-components";

const Wrapper = styled.div`
  #filter-tabs {
    margin-bottom: 20px;
  }
  .filtertabs-wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
  .songs-wrapper {
    gap: 50px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

const allSongsTabs = ["All", "Rock", "Pop", "Jazz", "Blues"];

const SongsSection = ({ songsData }) => {
  const [value, setValue] = useState(0);

  const _handleTabs = (e, val) => {
    setValue(val);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }


  const filteredData = (tabIndex) => {
    if (tabIndex === 0) {
      return songsData;
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"];
      const selectedGenre = tabLabel[tabIndex - 1];
      return songsData?.filter(
        (item) => item.genre.key === selectedGenre.toLowerCase()
      );
    }
  };


  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={_handleTabs}
            aria-label="basic tabs"
            id="filter-tabs"
          >
            {allSongsTabs?.map((each) => (
              <Tab label={each} key={each} sx={{ color: "white" }} />
            ))}
          </Tabs>
        </Box>

        {allSongsTabs?.map((_, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className="songs-wrapper">
              <Carousel 
                data={filteredData(index)}
                renderCardComponent={(item) => (
                  <SongsCards data={item} type="songs" />
                )}
              />
            </div>
          </TabPanel>
        ))}
      </Box>
    </Wrapper>
  );
};

export default SongsSection;
