import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../services/axios-client';
import createPost from '../../helpers/createPost';
import { Button, FormControl, Input } from '@chakra-ui/react';

class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.schema = Yup.object().shape({
            usuario: Yup.string().required('Required'),
            clave: Yup.string().required('Required')
        });
        this.inputValues = {
            usuario: '',
            clave: ''
        };
    }

    senData = (values) =>{
        api.post('login.php', createPost(values))
        .then((response)=>{
            alert('si jalo ahi')
        })
        .catch((err)=>{
            console.error(err.message);
        })
    }

    render(){
        return(
            <Formik
                initialValues={this.inputValues}
                validationSchema={this.schema}
                onSubmit={values=>{
                    this.senData(values);
                }}
            >
                {(props)=>(
                    <Form>
                        <Field  name='usuario'>
                            {({field, form})=>(
                                <FormControl 
                                    isInvalid={form.errors.usuario && form.touched.usuario ? true : false} 
                                    className='field'
                                >
                                    <Input 
                                        {...field} 
                                        type='text' 
                                        id='usuario' 
                                        placeholder='Usuario'
                                        variant="filled"
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='clave'>
                            {({field, form})=>(
                                <FormControl 
                                    isInvalid={form.errors.clave && form.touched.clave ? true : false }
                                    className='field' 
                                >
                                    <Input 
                                        {...field} 
                                        type='password' 
                                        id='clave' 
                                        placeholder='Contraseña' 
                                        variant="filled"
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Button colorScheme="blue" type='submit' value='submit'>Ingresar</Button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default LoginContainer;