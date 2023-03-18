import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {

  const [name,setName] = useState("");
  const [listName,setListName] = useState([]);

  function handleChange(event){
    const Targetval = event.target.value;
    setName(Targetval);
  }
  function handleClick(){
     setListName(preValue => {
       return  [...preValue,name];
     });
     setName("");
   
  }
 
  return (
    <div className="containerPro">
    <div className="list-box">
      <h3>To Do List in React</h3>
      <div className="flex-box">
        <input className="inp" onChange={handleChange} type="text" placeholder="Writing list..." value={name} />
        <button type="button" onClick={handleClick} className="btn btn-dark" >Buy Now</button>
      </div>
      <div className="list">
        <ul>

       {listName.map((todoItem)=>{ // mapping the listName where all the names return a single list item
         return <ToDoList text = {todoItem} />
       })}

        </ul>
      </div>
    </div>
  </div>

  )
}
export default App;
