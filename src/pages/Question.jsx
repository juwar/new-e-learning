import * as React from "react";
import Box from "@mui/material/Box";
import RadioButtonsGroup from "../layouts/sections/RadioButtonsGroup";

const dummyQuestions = [
  {
    question: { label: "Manakah yang bisa mengalahkan batu ?" },
    answerList: [
      {
        label: "Batu",
      },
      {
        label: "Gunting",
      },
      {
        label: "Kertas",
      },
      {
        label: "Mana",
      },
      {
        label: "Saja",
      },
    ],
    correctAnswer: { label: "Saja" },
  },
  {
    question: { label: "Manakah yang sakit ketika kena kepala ?" },
    answerList: [
      {
        label: "Anu",
      },
      {
        label: "Itu",
      },
      {
        label: "Ini",
      },
      {
        label: "Anunya Itu",
      },
      {
        label: "Anunya Ini",
      },
    ],
    correctAnswer: { label: "Anunya Itu" },
  },
];

function Question() {
  return (
    <Box className="Question__wrapper">
      <RadioButtonsGroup questionList={dummyQuestions} />
    </Box>
  );
}

export default Question;
