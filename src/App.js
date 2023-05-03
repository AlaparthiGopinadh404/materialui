import React from 'react';
import './App.css';
// import Material from './Components/Material/Material';
// import TableData from './Components/Table/Table';
// import Formik from './Components/Formik/Formik';
import {Routes,Route } from 'react-router-dom';
import TableDatainformation from './Components/Table/Table';
import TableDataedit from './Components/Table/Tableedit';
// import DataGrid from './Components/DataGrid';
import Muimodal from './Components/Muimodal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TableDatainformation/>}></Route>
        <Route path='/edit' element={<TableDataedit/>}></Route>
      </Routes>
      {/* <DataGrid/> */}
      <Muimodal/>
     {/* <Material/> */}
     {/* <Formik/> */}
     {/* <TableData/> */}
    </div>
  );
}

export default App;
