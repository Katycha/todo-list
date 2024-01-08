import {  TextField, Box, Button, Select,  MenuItem } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {DateTimePicker} from "@mui/x-date-pickers" ;
const AddTodo = ({
  todo,
  date,
  category,
  handleChange,
  handleDateChange,
  handleCategoryChange,
  handleAdd,
}) => {

  const categories = ["Работа", "Семья", "Саморазвитие", "Друзья", "MustRead книги", "Духовность", "Финансы"]; 
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
      <TextField
        sx={{ fontFamily: "cursive", textAlign: "center" }}
        name="todo"
        label="Задача"
        placeholder="Введите задачу"
        value={todo}
        onChange={handleChange}
      />
      <DateTimePicker
        value={date}
        onChange={handleDateChange}
        disablePast={true}
      />
      <Select
        labelId="category-label"
        id="category"
        name="category"
        label="Категория"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <Button variant="contained" onClick={handleAdd}>
        Добавить задачу
      </Button>
    </Box>
  );
};

export default AddTodo;
