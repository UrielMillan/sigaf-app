import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EditUser = props =>{
    
    const schema = Yup.object().shape({
        name: Yup.string().min(10, 'Nombre no valido').max(50, 'Nombre demasiado largo').required('Campo requerido'),
        username: Yup.string().min(10,'Usuario no valido').max(20, 'Usuario demasiado largo').required('Campo requerido'),
        user_type:Yup.number()
    });
    const inputValues = {
        name: props.params.name,
        username: props.params.username,
        user_type: props.params.user_type
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
                    <Field name='name' id='name'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.name && form.touched.name ? true : false}
                                className='field-spacing'
                            >
                                <Input
                                    {...field}
                                    type='text'
                                    placeholder='Nombre completo' 
                                />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='username' id='username'>
                        {({field, form})=>(
                            <FormControl
                                isInvalid={form.errors.username && form.touched.username ? true : false}
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
                    <Field name='user_type' id='user_type'>
                        {({field})=>(
                            <FormControl className='field-spacing'>
                                <Select {...field}>
                                    <option value={1}>Adminstrador</option>
                                    <option value={2}>Invitado</option>
                                </Select>
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

export default EditUser;

