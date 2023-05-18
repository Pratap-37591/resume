import React, { useContext } from 'react'
import { ContactInfo } from '../App';

const Language = () => {
  const language = useContext(ContactInfo).lang;
  return (
    <div className="contactInfo language">
    <h3 className="title">Language</h3>
    <ul>
        {language && 
        language.map((todo, index) => (
          <li key={index}>
           {todo}
          </li>
        ))}
      </ul>
        </div>
  )
}

export default Language;


// <h2>Language</h2>
//       <ul>
//     <li> {newTodo}</li>
//       </ul>
//       <p>Add a new todo:</p>
//       <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={addTodo}>Add</button>
//       {languageTodoList  && Array.isArray(languageTodoList) && (
//       <ul>
        
//         {languageTodoList.map((todo, index) =>  (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>x</button>
//           </li>
//         ))}
//       </ul>
//       )}
 