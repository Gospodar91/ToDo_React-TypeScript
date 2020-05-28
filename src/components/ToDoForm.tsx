import React, { useState, ChangeEvent } from "react";
interface TodoProps{
    onAdd(title:string):void
}
export const ToDoForm: React.FC<TodoProps> = (props) => {
  const [titleState, setTitleState] = useState<string>();
  const changeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
      setTitleState(event.target.value)
  }
  const keyPress=(event:React.KeyboardEvent)=>
  {
if(event.key==='Enter'){
   props.onAdd(titleState!)
    setTitleState('')
}
  }
  return (
    <div className="input-field todoForm">
      <input 
      onChange={changeHandler}
      value={titleState}
      onKeyPress={keyPress}
      placeholder='Enter To Do'
      type="text" id="title" />
      <label htmlFor="title" className="active">
        Enter To DO
      </label>
    </div>
  );
};
