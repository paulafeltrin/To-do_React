import React from "react";
import Todo from "./component/Todo";
import Home from "./component/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body{
    background-color: lightpink;
  }
`
const Div = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  color: purple;
  margin-bottom: 10px;
`
export default function App(){
  return(
    <Router>
          <GlobalStyle />
          <Div>
          
            <Link to='/home'><p>Home</p></Link>
            <Link to='/todo'><p>Lista to-do</p></Link>
          </Div>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
    </Router>
  )
}
