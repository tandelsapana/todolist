import { useState } from "react"

const ToDolist = () => {
    let [task,setTask]= useState("");
    let [taskArray,setTaskArray]= useState([]);
    let clickHandler=() => {
        console.log("Hello")
        setTaskArray([...taskArray,task]);
        console.log(taskArray);
    }
    let onChangeHandler=(e) => {
       //console.log(e)
      console.log(e.target.value);
      setTask(e.target.value)
    }
    return (  
   <>
   <div className="mb-3">
    <label htmlFor="" className="form-label">Task</label>
    <input
        type="text"
        className="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
        onChange={onChangeHandler}
    />
   
   </div>
   <button onClick={clickHandler}>add Task</button><br></br>
   {task}
   {
    taskArray.map( (elem) => {
        return <li>{elem}</li>
    }

    )
   }
   
   </>
    );
}
 
export default ToDolist;