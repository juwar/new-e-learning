import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CancelIcon from "@mui/icons-material/Cancel";

// const mode = "quiz";
const mode = "result";

function AnswerList({ list, checked, correct }) {
  const getAbjad = (number) => {
    let abjad = "";
    switch (number) {
      case 0:
        abjad = "A.";
        break;
      case 1:
        abjad = "B.";
        break;
      case 2:
        abjad = "C.";
        break;
      case 3:
        abjad = "D.";
        break;
      case 4:
        abjad = "E.";
        break;
      default:
        abjad = "";
    }
    return abjad;
  };

  const getColorStyle = (item) => {
    let style = "";
    if (
      checked === item?.label &&
      correct === item?.label &&
      mode === "result"
    ) {
      style = "RadioButtonsGroup__correct";
    } else if (
      checked === item?.label &&
      correct !== item?.label &&
      mode === "result"
    ) {
      style = "RadioButtonsGroup__incorrect";
    } else if (checked === item?.label) {
      style = "RadioButtonsGroup__checked";
    }

    return style;
  };

  return (
    <>
      {list.length > 0
        ? list.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                className={`RadioButtonsGroup__radio-box ${getColorStyle(
                  item
                )}`}
                value={item?.label}
                control={
                  <Radio
                    checkedIcon={
                      (checked === item?.label && correct === item?.label) ||
                      mode === "quiz" ? (
                        <CheckCircleIcon />
                      ) : (
                        <CancelIcon />
                      )
                    }
                    icon={<RadioButtonUncheckedIcon />}
                  />
                }
                label={`${getAbjad(index)} ${item?.label}`}
              />
            );
          })
        : null}
    </>
  );
}

export default function RadioButtonsGroup({ questionList }) {
  const [value, setValue] = useState([]);

  const handleChange = (event, index) => {
    const newArray = [...value];
    newArray[index] = event.target.value;
    setValue(newArray);
  };

  return (
    <FormControl className="RadioButtonsGroup__wrapper">
      {questionList.length > 0
        ? questionList.map((item, index) => {
            return (
              <Box key={index} className="RadioButtonsGroup__answer-box">
                <FormLabel id="demo-controlled-radio-buttons-group">
                  {`${index + 1}. ${item?.question?.label}`}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value[index]}
                  onChange={(event) => handleChange(event, index)}
                >
                  <AnswerList
                    list={item.answerList}
                    checked={value[index]}
                    correct={item?.correctAnswer?.label}
                  />
                </RadioGroup>
              </Box>
            );
          })
        : null}
    </FormControl>
  );
}