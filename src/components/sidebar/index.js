import React, { Component } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        }

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onOpen(){
        this.setState({
            isOpen: true
        });
    }

    onClose(){
        this.setState({
            isOpen: false
        });
    }

    render(){
        return(
            <React.Fragment>
                <IconButton 
                    icon={<HamburgerIcon w={8} h={8}/>} 
                    size="md"
                    colorScheme="blue"
                    aria-label="Open Menu"
                    onClick={this.onOpen}
                />
                <Drawer
                    isOpen={this.state.isOpen}
                    placement='left'
                    onClose={this.onClose}
                    size='xs'
                >
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Hola</DrawerHeader>
                            <DrawerBody>
                                hola utos
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </React.Fragment>
        )
    }
}

export default Sidebar;