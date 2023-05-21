import React, { useEffect, useReducer } from "react";

import ToDoForm from "../components/ToDoForm.jsx";
import ToDoTable from "../components/ToDoTable.jsx";

import { Box, Typography } from "@mui/material";

import ToDoReducer from "../reducers/ToDoReducer.js";

const todosAwal = [
  { id: 1, name: "Review DOM", isCompleted: true },
  { id: 2, name: "Belajar Nge-React", isCompleted: false },
  { id: 3, name: "Belajar Component React", isCompleted: false },
];

function ToDo() {
  const [todos, dispatch] = useReducer(ToDoReducer, todosAwal);

  const addTodos = (newTodo) => {
    dispatch({
      type: "tambah",
      name: newTodo,
    });
  };

  const completeTodo = (idTodo) => {
    dispatch({
      type: "hapus",
      id: idTodo,
    });
  };

  useEffect(() => {
    let textTitle = "Todos: " + todos.length;
    console.log(textTitle);
    document.title = textTitle;
  }, [todos]);

  return (
    <>
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          backgroundColor: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5">Container ToDo</Typography>

        <ToDoForm fnAddTodos={addTodos} />
        <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
      </Box>
    </>
  );
}

export default ToDo;
