import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/index";
import Navbar from "./components/Navbar/Navbar";
import TableData from "./components/TableData/TableData"
// import TableContainer from "./TableContainer"


function App() {
  return (
    <>
    <Wrapper>
    <Navbar></Navbar>
    <TableData></TableData>
    </Wrapper>
  </>
  );
}

export default App;
