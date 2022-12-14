import React,{useState} from 'react'
import styled from 'styled-components';
import { AiOutlineDelete } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

const Div = styled.div`
    border: 1px solid lightgray;
    max-width: 50%;
    margin: 0 auto;
    background-color: #c1e8ee;
    border: 1px solid pink;
    border-radius: 5px;
    text-align: center;
`

const Form = styled.form`
    text-transform: capitalize;
    font-size: 1.2rem;

    li{
        text-align: left;
        list-style: none;
        margin-left: 10px;
        width: 100%;
    }
    button{
        background-color: white;
        color: black;
        border-radius: 5px;
        margin: 2vh .5vw;
        padding: .5vh 2vw;
        cursor: pointer;
    }
`
export const Btnadd= styled.button`
  :hover{
    background-color: lightgreen;
  }
`
export const DelItem= styled.button`
  :hover{
    background-color: lightslategray;
  }
`
export const DelAll= styled.button`
  color: red;
  background-color: lightpink;

  :hover{
    background-color: red;
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

function ClearAll(id){
    const listaFiltrada = List.filter(item => item.id === id)
    setList(listaFiltrada)
}
  return(
    <Div>
      <h1>LISTA TO-DO</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Btnadd title='Adicionar item' onClick={() =>{Add()}}>ADD</Btnadd>
        <input value={input} onChange={e=>setInput(e.target.value)} />
        {List.map((item) => (
            <li>
                {item.value}
                <DelItem title='Apagar item' onClick={() =>{Del(item.id)}}><FiDelete /></DelItem>
            </li>
        ))}
        <DelAll title='Apagar todos os itens' onClick={() =>{ClearAll()}}><AiOutlineDelete /></DelAll>
      </Form>
    </Div>
    
  )
}