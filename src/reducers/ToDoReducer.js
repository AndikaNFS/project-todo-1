export default function ToDoReducer(todos, action) {
  switch (action.type) {
    case 'tambah':
      const newId = todos[todos.length - 1].id + 1;

      const objTodo = {
        id: newId,
        name: action.name,
        isCompleted: false,
      };

      return [...todos, objTodo];

    case 'hapus':
      return todos.map((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = true;
        }

        return todo;
      });

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
