import React ,{ Component } from 'react';
import { Avatar, Box, Center, Container} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { newSesion } from '../../redux/actions/sesionActions';
import api from '../../services/axios-client';
import createPost from '../../helpers/createPost';
import LoginForm from '../../components/forms/LoginForm';

class Login extends Component {
    constructor(props){
        super(props);
    }

    sendDataToServer = (values) =>{
        api.post('login.php', createPost(values))
        .then((response)=>{
            this.validateNewSesion(response.data);
        })
        .then((err)=>{

        })
    }

    validateNewSesion = (serverResponse) =>{
        if(serverResponse.success){
            alert('Bienvenido '+ serverResponse.data.name);
            this.props.newSesion(serverResponse.data);
        }else{
            alert('Usuario no valido');
        }
    }

    render(){
        return(
            <Container maxW='full' h='100vh' p='10px' bg='blue.50'>
               <Center paddingTop='100px'>
                    <Box p='10px' w='sm' borderWidth='1px' borderRadius='4px' bg='white' shadow='base'>
                        <Center>
                            <Avatar size='xl'/>
                        </Center>
                        <LoginForm sendDataToServer = {this.sendDataToServer}/>
                    </Box>
               </Center>
            </Container>
        );
    }
}

const mapStateToProps = state =>({
    sesion: state.sesion
});

const mapDispatchToProps = dispatch =>({
    newSesion: (userData) => dispatch(newSesion(userData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));