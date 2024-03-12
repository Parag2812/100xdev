import { useState } from "react";
import { Todos } from "./Todos";

export function CreateTodo() {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title"type="text" placeholder="title"
            onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }}></input> <br />
    
        <input id="desc" type="text" placeholder="description"
             onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input> <br />

        <button  onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    Todos(json);
                    alert("Todo added");
                })

                
        }}
        
        >Add a todo</button>
    </div>
}