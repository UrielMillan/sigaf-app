import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeSesion } from '../../redux/actions/sesionActions';
import { 
    Avatar, 
    Box, 
    Flex, 
    HStack,
    Button,
    Spacer,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import Sidebar from '../sidebar';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            show : false
        };
       this.handleDialog = this.handleDialog.bind(this);
    }

    handleDialog(){
        this.setState({
            show: !this.state.show
        });
    }

    logOut=()=>{
        this.handleDialog();
        setTimeout(() => {
            this.props.closeSesion();
        }, 100);
    }

    render(){
        {console.log(this.props.sesion)}
        return(
            <Box h='60px' borderBottomWidth='1px'>
                <Flex h='100%' align='center' p='20px'>
                    <Sidebar />
                    <Spacer />
                    <HStack>
                        <ProfileSettings
                            show={this.state.show} 
                            name={this.props.sesion.user.name} 
                            handleDialog={this.handleDialog}
                            logOut={this.logOut}
                         />
                    </HStack>
                </Flex>
            </Box>
        )
    }
}

const ProfileSettings = ({show, name, handleDialog, logOut}) =>{
    return(
        <React.Fragment>
            <Button colorScheme='red' onClick={handleDialog}>Salir</Button>
            <Avatar name={name} />
            <AlertDialog isOpen={show} onClose={handleDialog}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontWeight='bold'>Salir</AlertDialogHeader>
                        <AlertDialogBody>¿Desea salir de la aplicacion?</AlertDialogBody>
                        <AlertDialogFooter>
                            <Button onClick={handleDialog} mr='3'>Cacelar</Button>
                            <Button onClick={logOut} colorScheme='red'>Aceptar</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </React.Fragment>
    );
}

const mapStateToProps = state =>({
    sesion: state.sesion
});
const mapDispatchToProps = dispatch=>({
    closeSesion: ()=>dispatch(closeSesion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
