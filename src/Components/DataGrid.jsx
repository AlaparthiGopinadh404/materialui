import React from 'react';
import {Box,Typography} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DataGridData= ()=> {
    const fields=[
    
            {field:"sid ", headerName:"student ID",width:150},
            {field:"fname ", headerName:"first Name",width:150}, 
            {field:"lname ", headerName:"last Name",width:150 }
       

    ];
    const rows=[
        {id:1,sid:1,fname:"Gopi",lname:"Alaparthi"},
        {id:2,sid:2,fname:"sriharan",lname:"kandepalli"},
        {id:3,sid:3,fname:"venky",lname:"Mundagalla"},
    ];
  return (
    <Box>
        <Typography variant="h4" color="error" align="center">
        DataGrid Example
         </Typography>
        <Box m={2} sx={{height:"100vh",width:600,mx:"auto"}}>
            <DataGrid rows={rows} columns={fields}/>
        </Box>
    </Box>
  )
}
 
export default DataGridData;