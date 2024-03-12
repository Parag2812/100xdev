import { } from "react"
import PropTypes from 'prop-types';

export function Todos({todos}) {
    return(
        <div>
           {todos.map(function(todo){
            return (<div key={todo.id}>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>)
           })} 
        </div>

    )

}
Todos.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        // Add more prop types if there are additional properties
      })
    ).isRequired,
  };