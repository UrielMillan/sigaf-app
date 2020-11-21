import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ResetPassword = props =>{
    
    const schema = Yup.object().shape({
        pass: Yup.string().min(5,'Contraseña corta').max(20,'Contraseña invalida').required('Campo requerido'),
        passconfirm: Yup.string().oneOf([Yup.ref('pass'),null], 'La contraseña no coincide').required('Campo requerido'),
    });
    const inputValues = {
        pass: '',
        passconfirm: '',
    }
    return(
        <Formik
            initialValues={inputValues}
            validationSchema={schema}
            onSubmit={values=>{
                console.log(values);
            }}
        >
            {(props)=>(
                <Form>
                    <Field name='pass' id='pass'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.pass && form.touched.pass ? true : false}
                                className='field-spacing'
                            >
                                <Input
                                    {...field}
                                    type='password'
                                    placeholder='Contraseña' 
                                />
                                <FormErrorMessage>{form.errors.pass}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='passconfirm' id='passconfirm'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.passconfirm && form.touched.passconfirm ? true : false}
                                className='field-spacing'
                            >
                                <Input
                                    {...field}
                                    type='password'
                                    placeholder='Confirmar contraseña' 
                                />
                                <FormErrorMessage>{form.errors.passconfirm}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <HStack spacing="10px">
                        <Button colorScheme="red" type='reset' value='reset'>Cancelar</Button>
                        <Button colorScheme="blue" type='submit' value='submit'>Ingresar</Button>
                    </HStack>
                </Form>
            )}

        </Formik>
    );   
}

export default ResetPassword;