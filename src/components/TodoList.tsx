import React from 'react'
import { ITodo } from './../inerfaces';

type TodoListProps={
    todos: ITodo[]
    onToggle(id:number):void
    onRemove(id:number):void
}
export const TodoList:React.FC<TodoListProps>=({todos,onRemove,onToggle})=>{
 
    return(

        <>
        {todos.length===0?<p className ='center'>No todos yet</p>:
        <ul>
            {todos.map(todo=>{
                const classes=['todo']
                if(todo.completed){
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input 
                            onChange={onToggle.bind(null,todo.id)}
                            type='checkbox' checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i className='material-icons red-text' onClick={()=>onRemove(todo.id)}>delete</i>
                        </label>
                    </li>)
            })}


        </ul>
}
        </>
    )
} 