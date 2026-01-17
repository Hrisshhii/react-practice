import { useState,useEffect,useRef } from 'react';
import './Todo.css';
import { BackHome } from '../BackHome';

export function Todo(){
    const [todos,setTodos]=useState(()=>{
        const saved = localStorage.getItem("todos");
        return saved? JSON.parse(saved): [];
    });
    const [input,setInput]=useState('');

    const handleSubmit=()=>{
        if(!input.trim()) return;
        setTodos(todos=>[
            ...todos,
            {
                text: input,
                id: crypto.randomUUID(),
                done: false
            }
        ]);
        setInput('');
    };

    const toggleTodo=(id)=>{
        setTodos(todos=>
            todos.map(todo=>
                todo.id===id?{...todo,done:!todo.done} : todo
            )
        );
    };

    const deleteTodo=(id)=>{
        setTodos(todos=>todos.map(t=>t.id ===id ? {...t,removing:true} : t))
        setTimeout(()=>{
            setTodos(todos=> todos.filter(todo=>todo.id!==id));
        },200);
    };

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

    const [editingId,setEditingId]=useState(null);
    const [editText,setEditText]=useState("");

    const startEditing=(id,text)=>{
        setEditingId(id);
        setEditText(text);
    };
    const saveEdit=(id)=>{
        setTodos(todos=>
            todos.map(t=>
                t.id===id ? {...t,text:editText} : t
            )
        );
        setEditingId(null);
    };

    const listEndRef=useRef(null);
    useEffect(()=>{
        listEndRef.current?.scrollIntoView({behavior:"smooth"});
    },[todos]);

    return (
        <div className='todo'>
            <BackHome />
            <div className="todo-card">
                <input 
                    className='input-bar' 
                    type='text' 
                    placeholder='Type the Todo task' 
                    value={input} onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=>e.key==="Enter" && handleSubmit()}
                />
                <button className='submit-button' onClick={handleSubmit}>Submit</button>
                <ul>
                    {todos.length === 0 && <p className="empty">No tasks yet</p>}
                    {todos.map(({text,id,done,removing})=>(
                        <li key={id} className={`${done ? "done":""} ${removing? "removing" : ""}`}>
                            {editingId===id? (
                                <input
                                    value={editText}
                                    onChange={e=>setEditText(e.target.value)}
                                    onBlur={()=>saveEdit(id)}
                                    onKeyDown={e=>e.key==='Enter' && saveEdit(id)}
                                    autoFocus
                                />
                            ):(
                                <span onDoubleClick={()=>startEditing(id,text)} onClick={()=>toggleTodo(id)}>{text}</span>
                            )}

                            <button className='delete-button' onClick={() => deleteTodo(id)}>🗑</button>
                        </li>
                    ))}
                    <div ref={listEndRef}></div>
                </ul>
                {todos.some(t=>t.done) && (
                    <button className='clear-completed' onClick={()=>setTodos(todos.filter(t=>!t.done))}>Clear Completed</button>
                )}
            </div>
        </div>
    );
}