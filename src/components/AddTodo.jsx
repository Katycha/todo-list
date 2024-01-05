import {  TextField, Box, Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {DateTimePicker} from "@mui/x-date-pickers" ;
const AddTodo = ({
  todo,
  date, 
  handleChange,
  handleDateChange,
  handleAdd,
  
}) => {

  
  return (
    <Box sx={{display: "flex", flexDirection: "column", rowGap: "10px"}}>
      <TextField
        sx={{ fontFamily: "cursive", textAlign: "center" }}
        name="todo"
        label="Задача"
        placeholder="Введите задачу"
        value={todo}
        onChange={handleChange}
      />
      <DateTimePicker value={date} onChange={handleDateChange} disablePast={true}/>
      <Button variant="contained" onClick={handleAdd}>Добавить задачу</Button>
    </Box>
  );
};

export default AddTodo;
