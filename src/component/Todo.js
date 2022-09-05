import React,{useState} from 'react'
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid lightgray;
    width: 50vw;
    margin: 0 auto;
    text-align: center;
`

const Form = styled.form`
    color: green;
    font-size: 1.2rem;

    li{
        text-align: left;
        list-style: none;
        margin-left: 10px;
    }
    button{
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 2vh 2vw;
    }
`

export default function Todo(){

const [input, setInput] = useState()
const [List, setList] = useState([])

const Add = () =>{
    let detalhandoInput = {
      value: input,
      id: Date.now()
    }
    if(input !== " " && input !== ""){
        setList([...List, detalhandoInput])
        setInput("")
    }
  } 

function Del(rastreador){
    const listaFiltrada = List.filter(item => item.id !== rastreador)
    setList(listaFiltrada)
}

function Reset(id){
    const listaFiltrada = List.filter(item => item.id === id)
    setList(listaFiltrada)
}
  return(
    <Div>
      <h1>LISTA TO-DO</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <button onClick={() =>{Add()}}>ADD</button>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        {List.map((item) => (
            <li>
                {item.value}
                <button onClick={() =>{Del(item.id)}}>Excluir tarefa</button>
            </li>
        ))}
        <button onClick={() =>{Reset()}}>Excluir TODAS as tarefas</button>
      </Form>
    </Div>
    
  )
}