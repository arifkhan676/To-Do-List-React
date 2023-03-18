import React ,{ useState }  from "react";

function ToDoList(props){ /// return text from app.jsx 
     const [isDone,setIsDone] = useState(false); //needed for array showing in props
    
     function changeText (){
     /*   if(isDone === false){
            setIsDone(true);
        }
        else{
            setIsDone(false);

        } */
        setIsDone(preValue=>{
           return !preValue;
        })
     }
     

    return  <div >
    <li onClick={changeText} style={{ textDecoration: isDone ?  "line-through" : "none"  }} > {props.text} </li>

    </div>
    
}

export default ToDoList;