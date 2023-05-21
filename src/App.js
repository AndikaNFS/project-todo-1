import React from "react";
import ToDoWithReducer from './containers/ToDoWithReducer.jsx';

function App() {
  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>

    <ToDoWithReducer />
  </div>
  );
}

export default App;
