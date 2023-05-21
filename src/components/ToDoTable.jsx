import React from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

function ToDoTable(props) {
  const btnOnClickHandler = (todoId) => {
    props.fnCompleteTodo(todoId);
  };

  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h5">Component ToDoTable</Typography>
      <Table sx={{ maxWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.name}</TableCell>
              <TableCell>
                {todo.isCompleted ? "Selesai" : "Belum Selesai"}
              </TableCell>
              <TableCell>
                {todo.isCompleted ? (
                  ""
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => btnOnClickHandler(todo.id)}
                  >
                    Selesaikan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ToDoTable;
