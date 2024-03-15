import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App(){
  const [selectedID, setselectedID] = useState(1);
  
  return <div>
    <button onClick = {function () {
        setselectedID(1);
        }} >1 </button>

<button onClick = {function () {
        setselectedID(2);
        }} >2 </button>
        

        <button onClick = {function () {
        setselectedID(3);
        }} >3</button>

<button onClick = {function () {
        setselectedID(4);
        }} >4 </button>
     
      <Todo id={selectedID} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        console.log(response);

        setTodo (response.data.todo);
      })
  }, [id])

  return <div>

    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App
