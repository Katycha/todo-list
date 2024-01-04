import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = ({
  todo,
  handleChange,
  handleAdd,
  
}) => {

  
  return (
    <TextField
      sx={{ fontFamily: "cursive", textAlign: "center" }}
      name="todo"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          handleAdd();
        }
      }}
      label="Задача"
      placeholder="Введите задачу"
      value={todo}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                if (todo.trim() !== "") {
                  handleAdd(); 
                } 
              }}
              disabled={!todo.trim()}
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default AddTodo;
