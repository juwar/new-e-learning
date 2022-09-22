import * as React from "react";
import Box from "@mui/material/Box";
import AccordionList from "../layouts/sections/AccordionList";

const dummyList = [
  {
    course: { name: "IPA" },
    chapterList: [
      {
        name: "BAB 1",
      },
      {
        name: "BAB 2",
      },
      {
        name: "BAB 3",
      },
      {
        name: "BAB 4",
      },
      {
        name: "BAB 5",
      },
    ],
  },
  {
    course: { name: "Bahasa" },
    chapterList: [
      {
        name: "BAB 1",
      },
      {
        name: "BAB 2",
      },
      {
        name: "BAB 3",
      },
      {
        name: "BAB 4",
      },
    ],
  },
];

function Teacher() {
  return (
    <Box className="Teacher__wrapper">
      <AccordionList list={dummyList} />
    </Box>
  );
}

export default Teacher;
