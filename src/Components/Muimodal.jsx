import { Box ,Button,Typography ,Modal} from '@mui/material';
import React, { useState } from 'react';

const Muimodal = ()=>{
    const[open,setOpen]=useState(false)
    const style= {
        position:"absolute",
        width:400,
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        bgcolor:"background.paper",
        border: "2px solid #ff0000",
        borderRadius:"2px",
        p:2,
        boxShading:24,
    };
    return(
        <Box>
            <Typography variant='h5' color="secondary" align='center' gutterBottom>
                Modal
            </Typography>
            <Button color="secondary" variant='contained' onClick={()=>{setOpen(true)}}>Show Modal</Button>
            <Modal open={open } onClose={()=>setOpen(false)}>
                <Box sx={style}>
                    <Typography variant='h5'>Modal Heading</Typography>
                    <Typography variant='body2' align="justifyn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quidem. Ullam quae quasi perspiciatis, ab natus quisquam placeat numquam commodi perferendis! Itaque saepe eaque molestiae sequi cupiditate natus adipisci veniam.</Typography>
                    <Button sx={{m:1}}   variant='contained' color="error" onClick={()=>{setOpen(false)}}>close</Button>
                </Box>
            </Modal>
        </Box>
    )
}
export default Muimodal ;