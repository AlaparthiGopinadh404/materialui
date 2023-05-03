import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect,useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';


const TableDatainformation = ()=>{
    const [array,setarray] = useState([''])
    const navigate= useNavigate();
    

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        qualification: "",
        address: "",
        age: "",
        gender: "",
        agreecheck: false

    };
    const validationSchema = Yup.object({
        firstName: Yup.string().min(3).max(10).required(),
        lastName: Yup.string().min(3).max(10).required(),
        email: Yup.string().email().matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, 'please enter valid email').required(),
        mobileNumber: Yup.number().min(1000000000, 'please 10 digits number').max(9999999999, 'please 10 digits number').required(),
        qualification: Yup.string().required(),
        address: Yup.string().required(),
        age: Yup.number().required(),
        gender: Yup.string().required(),
        agreecheck: Yup.bool().oneOf([true], 'please check confirmation box').required()
    });
    const onSubmit = (values) => {
       
        console.log(values)
        const res =[...array,values]
        setarray(res)
        console.log('test',res)
        localStorage.setItem('res',JSON.stringify(res))
    }
    useEffect(()=>{
        const  str = localStorage.getItem('res')
        if(str){
            setarray(JSON.parse(str))
        }
    },[])
    const Delete=(i)=>{
        var temp=[...array]
        temp.splice(i,1)
        setarray(temp)
        console.log(temp)
    }
    return(
        <div>
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,{resetForm}) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                <Form>
                   
                    {/* <Grid container>
                     <Grid sx={12 } className='d-flex '>
                     <Grid sx={6}>
                        <Typography variant="h6" className='text-start'>FirstName:</Typography>
                        <TextField type="text" name="firstName" placeholder='Enter Name'/>
                        </Grid>
                        <Grid sx={6} className='justify-content-around p-2'>
                        <Typography variant="h6" className='text-start'>LastName:</Typography>
                        <TextField type="text" name="lastName" placeholder='Enter Name'/>
                      </Grid>
                     </Grid>
                  

                    </Grid>
                    <Grid container>
                    <Grid sx={12 } className='d-flex '>
                     <Grid sx={6}>
                        <Typography variant="h6" className='text-start'>Email:</Typography>
                        <TextField type="text" name="Email" placeholder='Enter Email'/>
                        </Grid>
                        <Grid sx={6} className='justify-content-around p-2'>
                        <Typography variant="h6" className='text-start' >Phone:</Typography>
                        <TextField type="number" name="mobileNumber" placeholder='Enter  phn Number'/>
                      </Grid>
                     </Grid>
                    </Grid>
                    <Grid container>
                    <Grid sx={12 } className='d-flex '>
                     <Grid sx={6}>
                        <Typography variant="h6" className='text-start'>Education:</Typography>
                        <TextField as="text" name="education" placeholder='Enter Education'>
                            <option value="SSC">SSC</option>
                            <option value="INTER">INTER</option>
                            <option value="DEGREE">DEGREE</option>
                            <option value="MBA">MBA</option>
                            <option value="BTECH">BTECH</option>
                            <option value="MTECH">MTECH</option>
                    </TextField>
                        </Grid>
                        <Grid sx={6} className='justify-content-around p-2'>
                        <Typography variant="h6" className='text-start'>Address:</Typography>
                        <TextField type="text" name="Address" placeholder='Enter address'/>
                      </Grid>
                     </Grid>
                    </Grid>
                    <Grid container>
                    <Grid sx={12 } className='d-flex '>
                     <Grid sx={6}>
                        <Typography variant="h6" className='text-start'>Age:</Typography>
                        <TextField type="text" name="age" placeholder='Enter Age'/>
                        </Grid>
                        <Grid sx={6} className='justify-content-around p-4 d-flex mt-4'>
                        <Typography>Gender:</Typography>
                        <Typography>
                            <TextField type="radio" name="gender" value="male"/>
                            Male
                        </Typography>
                        <Typography>
                            <TextField type="radio" name="gender" value="female"/>
                            FeMale
                        </Typography>
                        
                        
                      </Grid>
                     </Grid>
                    
                    </Grid>
                    <Button variant='contained' type="submit">Submit</Button> */}
                    <div className='container'>
                        <div className='row text-start' >
                            <div className='col-md-6 col-sm-12 text-danger form-group mt-4' Grid sx={6} xs={12}>
                                <label  for='firstName' className='text-black text-start name' >FirstName:</label>
                                <Field type="text" name="firstName" className="form-control  " placeholder="Enter firstname" />
                                <ErrorMessage name="firstName" />
                            </div>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='lastName ' className='text-black name'>LastName:</label>
                                <Field type="text" name="lastName" className="form-control" placeholder="Enter lastname" />
                                <ErrorMessage name="lastName" />
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 col-sm-12 text-danger mt-4'>
                                <label htmlFor='email' className='text-black name'>Email:</label>
                                <Field type="text" name="email" placeholder="Enter mail id" className="form-control" />
                                <ErrorMessage name="email" />
                            </div>
                            <div className='col-md-6 col-sm-12 text-danger mt-4'>
                                <label htmlFor='mobileNumber ' className='text-black name'>PHN NO:</label>
                                <Field type="number" name="mobileNumber" placeholder="Enter phone number" className="form-control" />
                                <ErrorMessage name="mobileNumber" />

                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='qualification' className='text-black name'> Education:</label>
                                <Field as="select" name="qualification" placeholder="choose your education" className="form-control">
                                      <option>...select education....</option>
                                      <option value="SSC">SSC</option>
                                      <option value="INTER">INTER</option>
                                      <option vlaue="Degree">Degree</option>
                                      <option value="MBA" >MBA</option>
                                      <option value="BTECH">BTECH</option>
                                      <option value="MTECH">MTECH</option>
                                </Field>
                                <ErrorMessage name="qualification"/>
                            </div>
                            <div className='col-md-6 text-danger mt-4'>
                                <label htmlFor='address' className='text-black name'>ADDRESS:</label>
                                <Field type="text" name="address" className="form-control" placeholder="Enter Your address"/>
                                <ErrorMessage name="address"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div  className='col-md-6 text-danger mt-4'>
                                <label htmlFor='age' className='text-black name'>Age:</label>
                                <Field type="number" name="age" className="form-control" placeholder="Enter your age"/>
                                <ErrorMessage name="age"/>
                            </div>
                            <div className='col-md-6 mt-4'>
                                <label htmlFor='gender' className='text-black name'>Gender:</label>
                                <div>
                                    <label>
                                        <Field type="radio" name="gender" value="male" className="m-3"/>
                                        Male
                                    </label>
                                    <label>
                                        <Field type="radio" name="gender" value="female" className="m-3"/>
                                        Female
                                    </label>
                                </div>
                                <ErrorMessage name="gender"/>
                            </div>
                        </div>
                        <div className='row text-start'>
                            <div className='col-md-12 d-flex mt-4' >
                                <Field type="checkbox" name="agreecheck" className="p-4 m-2 mb-5 text-black " />
                                <p> I have read and agree the terms and conditions</p>
                               
                            </div>
                            <ErrorMessage name="agreecheck"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-center">Submit</button>
                    </div>
                </Form>
            </Formik>
           <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>firstName</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Education</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {array&&array.map((a,i)=>{
                        return <TableRow key={i}>
                            <TableCell>{a?.firstName}</TableCell>
                            <TableCell>{a?.lastName}</TableCell>
                            <TableCell>{a?. mobileNumber}</TableCell>
                            <TableCell>{a?.email}</TableCell>
                            <TableCell>{a?.qualification}</TableCell>
                            <TableCell>{a?.address}</TableCell>
                            <TableCell>{a?.age}</TableCell>
                            <TableCell>{a?. gender}</TableCell>
                            <TableCell>{a?.agreecheck}</TableCell>

                            <TableCell colSpan={2}><Button variant="contained" color="secondary" onClick={()=>{navigate('/edit',{state:{a,i}})}}>Edit</Button></TableCell>
                            <TableCell><Button variant="contained" color="error" onClick={()=>{Delete(i)}} >Delete</Button></TableCell>
                            
                        </TableRow>
                    })}
                </TableBody>
            </Table>
           </TableContainer>
        </div>
    )
}
export default  TableDatainformation  