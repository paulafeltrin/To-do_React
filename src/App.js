import React from "react";
import Todo from "./component/Todo";
import Home from "./component/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function App(){
  return(
    <Router>
          <>
            <Link to='/'><p>Home</p></Link>
            <Link to='/todo'><p>Lista to-do</p></Link>
          </>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
    </Router>
  )
}
