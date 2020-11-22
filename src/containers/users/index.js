import React, { Component } from 'react';
import { Container, Box, Heading} from '@chakra-ui/react';
import SearchBar from '../../components/searchbar';
import AsideSheet from './AsideSheet';

class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            showSheet: false
        };

        this.handleSheet = this.handleSheet.bind(this);
    }

    handleSheet(){
        this.setState({
            showSheet: !this.state.showSheet
        });
    }

    render(){
        return(
            <Container maxW='xl' p='10px'>
                <Box 
                    borderWidth='1px' 
                    p='20px' 
                    marginBottom='20px' 
                    borderRadius='5px' 
                    bg='gray.100'
                >
                    <Heading as='h3'>Usuarios</Heading>
                </Box>
                <SearchBar handleSheet={this.handleSheet}/>
                <AsideSheet 
                    showSheet={this.state.showSheet} 
                    handleSheet={this.handleSheet}
                />
            </Container>
        );
    }
}

export default Users;