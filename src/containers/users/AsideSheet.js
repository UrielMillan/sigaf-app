import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import AddUser from '../../components/forms/AddUser';

const AsideSheet = props =>{
    return(
        <Drawer
            isOpen={props.showSheet}
            placement='right'
            onClose={props.handleSheet}
            size='md'
        >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <AddUser />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>    
        </Drawer>
    );
}

export default AsideSheet;