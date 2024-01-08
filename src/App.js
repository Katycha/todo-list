import { Box } from "@mui/material";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "sonner";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleRateChange = (value, id) => {
    const filterTodos = todos.filter((item) => item.id !== id);
    const foundTodo = todos.find((item) => item.id === id);

    const newTodo = {
      ...foundTodo,
      rate: value,
    };
    setTodos([newTodo, ...filterTodos]);
  };

  const handleAdd = () => {
    if (todo.trim() === "") {
      toast.warning("You can't add an empty todo-list");
    } else {
      toast.info("Successfully added");
      setTodos((prevState) => {
        const newTodo = {
          name: todo,
          id: uuidv4(),
          isDone: false,
          deadLine: date,
          rate: 1,
          category: category,
        };

        return [newTodo, ...prevState];
      });

      setTodo("");
      setCategory("");
      setDate(null);
    }
  };

  const handleChangeDone = (event, id) => {
    const filterTodos = todos.filter((item) => item.id !== id);
    const foundTodo = todos.find((item) => item.id === id);

    const newTodo = {
      ...foundTodo,
      isDone: event.target.checked,
    };

    setTodos([...filterTodos, newTodo]);
    if (event.target.checked === true) {
      toast.success("Great job!");
    } else {
      toast.warning("Task is not done!");
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          rowGap: "20px",
          backgroundImage: `url("https://wallpapers-clan.com/wp-content/uploads/2023/11/aesthetic-pastel-clouds-desktop-wallpaper-preview.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AddTodo
            todo={todo}
            handleChange={handleChange}
            handleAdd={handleAdd}
            date={date}
            handleDateChange={handleDateChange}
            handleRateChange={handleRateChange}
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "Courier New",
            textAlign: "center",
            borderRadius: "20%",
            backdropFilter: "blur(5px)",
          }}
        >
          <Todos
            sx={{ backdropFilter: "blur(5px)", fontFamily: "cursive" }}
            title="Todos"
            todos={todos.filter((item) => item.isDone === false)}
            handleChange={handleChangeDone}
            handleRateChange={handleRateChange}
          />
          <Todos
            sx={{ backdropFilter: "blur(5px)", fontFamily: "cursive" }}
            handleChange={handleChangeDone}
            title="Done Todos"
            todos={todos.filter((item) => item.isDone === true)}
            handleRateChange={handleRateChange}
          />
        </Box>
        <Toaster richColors />
      </Box>
    </LocalizationProvider>
  );
}

export default App;
