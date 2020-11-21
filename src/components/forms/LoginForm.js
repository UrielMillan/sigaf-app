import React from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { FormControl, Input, Button, FormErrorMessage, HStack} from '@chakra-ui/react';

const LoginForm = ({sendDataToServer}) =>{
    const schema = Yup.object().shape({
        username: Yup.string().required('Ingrese su nombre de usuario'),
        pass: Yup.string().required('Ingrese su contraseña')
    });
    const inputValues = {
        username: '',
        pass: ''
    };

    return(
        <Formik
            initialValues={inputValues}
            validationSchema={schema}
            onSubmit={values=>{
                sendDataToServer(values);
            }}
        >
            {(props)=>(
                <Form>
                    <Field id='username' name='username'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.username ? true : false}
                                className='field-spacing'
                            >
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nombre de usuario' 
                                />
                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    <Field id='pass' name='pass'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.pass ? true : false}
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
                    <HStack spacing="10px">
                        <Button colorScheme="blue" type='submit' value='submit'>Ingresar</Button>
                    </HStack>
                </Form>
            )}
        </Formik>
    );
}

export default LoginForm;