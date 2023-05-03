import React from 'react';
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function FormikData() {
    const initialValues ={
        firstName:'',
        lastName:'',
        email:'',
        education:'',
        age:'',
        gender:'',
        agreecheck:false
    };
    const validationSchema = Yup.object({
        firstName:Yup.string().required(),
        lastName: Yup.string().required(),
        email:Yup.string().email().required(),
        education: Yup.string().required(),
        age:Yup.number().required(),
        gender:Yup.string().required(),
        agreecheck:Yup.bool().oneOf([true],'check box confirmation').required()
    });
    const onSubmit = (values)=>{
        console.log(values)

    }
  return (
    <div>
        <h1>Formik</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit= {(values,resetForm)=>{
               onSubmit(values)
               resetForm();
        }} 
        >
            <Form>
             <div className=''>
               <div className='row'>
                  <div className='col-md-6'>
                    <label htmlFor='firstname' className='text-start'>FirstName:</label>
                    <Field type="text" name="firstName" className="form-control w-75 " placeholder="Enter Name"/>
                    <ErrorMessage name="firstName" />
                  </div>
                  <div className='col-md-6'>
                    <label>LastName:</label>
                    <Field type="text" name="lastName" className="form-control" placeholder="Enter Name"/>
                    <ErrorMessage name="lastName"/>
                  </div>
               </div>
               
             </div>
            </Form>
        </Formik>
    </div>
  )
}

export default FormikData