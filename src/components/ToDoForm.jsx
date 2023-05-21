import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";

function ToDoForm(props) {
  const [inputData, setInputData] = useState("");

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    props.fnAddTodos(inputData);
    setInputData("");
  };

  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h5">Component ToDoForm</Typography>
      <form
        style={{
          margin: "0.5em 0em",
          display: "flex",
        }}
        onSubmit={formOnSubmitHandler}
      >
        <TextField
          type="text"
          style={{ marginRight: "0.5em" }}
          value={inputData}
          onChange={inputOnChangeHandler}
          label="Input kerjaan baru"
          size="small"
          variant="filled"
        />
        <Button type="submit" variant="contained" size="large">
          Tambah kerjaan
        </Button>
      </form>
    </Box>
  );
}

export default ToDoForm;
