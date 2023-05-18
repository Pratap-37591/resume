// import React, { useState,  } from 'react';
// import Education from './Education';

// const TodoList = () => {
//   const [lang, setLang] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleAddLang = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...lang, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input type="text" value={newTodo} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;