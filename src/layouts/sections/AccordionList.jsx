import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { ListsComponent } from "../components";
import BookIcon from '@mui/icons-material/Book';

export default function AccordionList({ children, list, ...rest }) {
  return (
    <Box className="AccordionList__wrapper">
      {list.length > 0
        ? list.map((item, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-conten`}
                  id={`panel-${index}-conten`}
                >
                  <BookIcon />
                  <Typography>{item?.course?.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListsComponent itemList={item?.chapterList} />
                </AccordionDetails>
              </Accordion>
            );
          })
        : null}
    </Box>
  );
}
