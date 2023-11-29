import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 20px;
    width: 1135px;
    margin-left: 153px;
    padding-bottom: 100px;

  .faqTitle {
    text-align: center;
    color: var(--color-white);
    font-size: 40px;
    margin-bottom: 20px;
  }

  .faqAccordionSummary {
    color: white !important;
    background-color: black !important;
    border: 1px solid white !important;
    border-radius: 10px;
  }

  .faqAccordionSummary .MuiSvgIcon-root {
    color: var(--color-primary);
    width: 35px;
    height: 40px;
  }

  .faqAccordionDetails {
    color: var(--color-black) !important;
    background-color: var(--color-white) !important;
    border: 1px solid white;
    border-radius: 3px;
  }
`;

const FAQ = () => {
  return (
    <Wrapper>
      <h1 className="faqTitle">FAQs</h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="faqAccordionSummary"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="faqAccordionSummary"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

export default FAQ;
