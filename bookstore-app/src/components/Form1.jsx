// import {
//     Typography,
//     TextField,
//     Button,
//     colors,
//     FormHelperText
//   } from "@mui/material";
//   import { ErrorMessage, Form, Formik } from "formik";
//   import React, { useEffect, useState } from "react";
//   import * as Yup from "yup";
//   import authService from "../services/authService";
//   import {toast} from 'react-toastify';
//   import axios from "axios";

  
//   const Form1 = () => {
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const [userDetails, setUserDetails] = useState({
//       userName: "",
//       password: ""
//     });

//     const [userData,setUserData]= useState();

//     const getData = async()=>{
//       await axios.get("https://book-e-sell-node-api.vercel.app/api/user/byId>id=${625}")
//       .then((res)=>setUserData(res.data));
//     };

//     useEffect(()=>{
//       getData()
//     },[]);
//     console.log(userData);

  
//     const validationSchema = Yup.object().shape({
//       userName: Yup.string().required("username required"),
//       password: Yup.string().min(8).required("password required"),
//       email: Yup.string().email().matches(/^[a-zA-Z0-9+_*-]+@[a-zA-Z0-9+_*-]+$/).required("email required"), //for custom format we can use .matches(regex)
//       age: Yup.number().min(18)
//     });


//     const handleSubmit = async(values) => {

//       // console.log("username:: ", userDetails.userName);
//       // console.log("password:: ", userDetails.password);


//       const payload={
//         firstName:values.userName,
//         lastName:"test",
//         email:values.email,
//         roleId:2,
//         password:values.password,
//       };


//       // axios.post("https://book-e-sell-node-api.vercel.app/api/user",payload).then((response)=>{
//       //   if(response && response.code===200){
//       //     toast("Data submitted");
//       //   }
//       // }).catch((error)=>{
//       //   toast("Data not submitted.");
//       // });

//       await authService
//        .Register(payload)
//        .then((response)=>{
//         console.log(response.code);
//         if(response && response.code===200){
//           toast.success("Data submitted successfully",{
//             position:"bottom-right",
//           });
//         }
//       }).catch((error)=>{
//         toast.error("unable to submit the data ",{
//           position:"bottom-right",
//         });
//       })
//     };
  
//     return (
//       <Formik
//         initialValues={{ userName: "", password: "", email: "", age: "" }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => handleSubmit()}
//       >
//         {({ values, errors, setFieldValue, handleBlur }) => {
//           // console.log("errors:: ", errors);
//           return (
//             <Form>
//               <div className="form-demo">
//                 <Typography variant="h3" sx={{ color: "red" }}>
//                   Login
//                 </Typography>
//                 <TextField
//                   id="outlined-basic"
//                   label="Username"
//                   name="userName"
//                   variant="outlined"
//                   error={errors.userName}
//                   value={values.userName}
//                   onChange={(e) => setFieldValue("userName", e.target.value)}
//                   onBlur={handleBlur}
//                 />
//                 <FormHelperText error>
//                   <ErrorMessage name="userName" />
//                 </FormHelperText>
//                 <TextField
//                   id="outlined-basic"
//                   label="Password"
//                   name="password"
//                   variant="outlined"
//                   value={values.password}
//                   onChange={(e) => setFieldValue("password", e.target.value)}
//                 />
//                 <FormHelperText error>
//                   <ErrorMessage name="password" />
//                 </FormHelperText>
//                 <TextField
//                   id="outlined-basic"
//                   label="email"
//                   name="email"
//                   variant="outlined"
//                   value={values.email}
//                   onChange={(e) => setFieldValue("email", e.target.value)}
//                 />
//                 <FormHelperText error>
//                   <ErrorMessage name="email" />
//                 </FormHelperText>
//                 <TextField
//                   id="outlined-basic"
//                   label="age"
//                   name="age"
//                   variant="outlined"
//                   value={values.age}
//                   onChange={(e) => setFieldValue("age", e.target.value)}
//                 />
//                 <FormHelperText error>
//                   <ErrorMessage name="age" />
//                 </FormHelperText>
//                 <Button variant="contained" type="submit">
//                   Submit
//                 </Button>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     );
//   };
//   export default Form1;



import { Button, FormHelperText, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { formStyles } from '../style/formStyles'
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Form1 = () => {
    // const [userName, setUserName] = useState("");
    // const [Password, setPassword] = useState("");
    // const [userDetails, setUserDetails] = useState({
    //     userName: "",
    //     email: "",
    //     age: "",
    //     Password: "",
    // });

    // const handleSubmit = () => {
    //     console.log("UserName: ", userDetails.userName);
    //     console.log("email: ", userDetails.email);
    //     console.log("UserName: ", userDetails.age);
    //     console.log("Password:", userDetails.Password);
    // }

    const validationSchema = Yup.object().shape({
        userName:Yup.string().required("Username should not be empty"),
        email:Yup.string().required("Email should not be empty"),
        age:Yup.string().required("Age should not be empty"),
        Password:Yup.string().required("Password should not be empty")
    })

    // useEffect(
    //     ()=>{
    //         if(userName){
    //             console.log("Hello");
    //         }
    //     },
    //     [userName]
    // );

    // console.log("Hello");
    return (
        <Formik initialValues={{ userName: "", email: "", age: "", Password: "" }}
            validationSchema={validationSchema}
        >
            {({ values,errors, setFieldValue }) => {
                console.log(errors);    
                return (
                    <Form>
                        <div style={{ ...formStyles.frm }}>

                            <Typography variant="h3" gutterBottom>
                                Login Here
                            </Typography>

                            <TextField
                                label="userName"
                                name="userName"
                                variant="outlined"
                                value={values.userName}
                                onChange={(e) => setFieldValue("userName", e.target.value)}>
                            </TextField>
                    
                            <FormHelperText>
                                <ErrorMessage name='userName'/>
                            </FormHelperText>
                            {/* <TextField label="Outlined" variant="outlined" /> */}

                            <TextField
                                label="email"
                                name="email"
                                variant="outlined"
                                value={values.email}
                                onChange={(e) => setFieldValue("email", e.target.value)}>
                            </TextField>

                            <FormHelperText>
                                <ErrorMessage name='email'/>
                            </FormHelperText>

                            <TextField
                                label="age"
                                name="age"
                                variant="outlined"
                                value={values.age}
                                onChange={(e) => setFieldValue("age", e.target.value)}>
                            </TextField>

                            <FormHelperText>
                                <ErrorMessage name='age'/>
                            </FormHelperText>

                            <TextField
                                label="Password"
                                name="Password"
                                variant="outlined"
                                value={values.Password}
                                onChange={(e) => setFieldValue("Password", e.target.value)}>
                            </TextField>

                            <FormHelperText>
                                <ErrorMessage name='Password'/>
                            </FormHelperText>

                            <Button variant="contained" type="submit" >Submit</Button>
                        </div>
                    </Form>
                )
            }}

        </Formik>
    )
}

export default Form1;
  