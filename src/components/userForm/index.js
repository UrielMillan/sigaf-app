import React , { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {Button, FormControl, HStack, Input, Select} from '@chakra-ui/react';

class UserForm extends Component {
    constructor(props){
        super(props);
        this.schema = Yup.object().shape({
            nombre: Yup.string().min(10,'Nombre no valido').max(50, 'Nombre demasiado largo').required("Required"),
            usuario: Yup.string().min(10,'Usuario no valido').max(20, 'Usuario demasiado largo').required("Required"),
            clave: Yup.string().min(5,'Contraseña corta').max(20,'Contraseña invalida').required("Required"),
            confirm: Yup.string().oneOf([Yup.ref('clave'),null], 'La contraseña no coincide').required("Required"),
            tipo:Yup.number()
        });
        this.inputValues = {
            nombre:'',
            usuario: '',
            clave: '',
            confirm: '',
            tipo: 1
        };
    }
    render(){
        return(
            <Formik
                initialValues={this.inputValues}
                validationSchema={this.schema}
                onSubmit={values=>{
                    console.log(values);
                }}
            >
                {(props)=>(
                    <Form>
                        <Field name='nombre'>
                            {({field, form})=>(
                                <FormControl
                                    isInvalid={form.errors.nombre && form.touched.nombre ? true : false}
                                    className='field'
                                >
                                    <Input
                                        {...field}
                                        type='text'
                                        id='nombre'
                                        placeholder='Nombre' 
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='usuario'>
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
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='clave'>
                            {({field, form})=>(
                                <FormControl
                                    isInvalid={form.errors.clave && form.touched.clave ? true : false}
                                    className='field'
                                >
                                    <Input
                                        {...field}
                                        type='password'
                                        id='clave'
                                        placeholder='Contraseña' 
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='confirm'>
                            {({field, form})=>(
                                <FormControl
                                    isInvalid={form.errors.confirm && form.touched.confirm ? true : false}
                                    className='field'
                                >
                                    <Input
                                        {...field}
                                        type='password'
                                        id='confirm'
                                        placeholder='Confirmar contraseña' 
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='tipo'>
                            {({field})=>(
                                <FormControl className='field'>
                                    <Select {...field} id='tipo'>
                                        <option value={1}>Adminstrador</option>
                                        <option value={2}>Invitado</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <HStack spacing="24px">
                            <Button colorScheme="red" type='reset' value='reset'>Cancelar</Button>
                            <Button colorScheme="blue" type='submit' value='submit'>Ingresar</Button>
                        </HStack>
                    </Form>
                )}

            </Formik>
        );
    }
}

export default UserForm;