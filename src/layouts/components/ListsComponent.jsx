import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from 'react-router-dom';

export default function ListsComponent({ itemList }) {
  const navigate = useNavigate()
  const getColorStyle = (index) => {
    const numberColor = index % 4;
    let style = "";
    switch (numberColor) {
      case 0:
        style = "ListsComponent__color-red";
        break;
      case 1:
        style = "ListsComponent__color-blue";
        break;
      case 2:
        style = "ListsComponent__color-purple";
        break;
      case 3:
        style = "ListsComponent__color-teal";
        break;
      default:
        style = "";
    }
    return style;
  };

  return (
    <Box className="ListsComponent__wrapper">
      <List>
        {itemList.length > 0
          ? itemList.map((item, index) => {
              return (
                <ListItem
                  disablePadding
                  key={index}
                  className={getColorStyle(index)}
                >
                  <ListItemButton onClick={() => navigate('/question') }>
                    <ListItemIcon>
                      <LibraryBooksIcon />
                    </ListItemIcon>
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
}
