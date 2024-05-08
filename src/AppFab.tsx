import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import "./AppFab.css";

export const AppFab = () => {
  return (
    <Fab color="primary" aria-label="add" className="right-bottom">
      <AddIcon />
    </Fab>
  );
};
