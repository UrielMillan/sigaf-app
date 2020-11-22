import React from 'react';
import {
    HStack, 
    Input, 
    Button, 
    InputGroup, 
    InputLeftElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    Spacer,
    Box,
    Flex,
    IconButton
} from '@chakra-ui/react';
import { SearchIcon, AddIcon, TriangleDownIcon } from '@chakra-ui/icons'

const SearchBar = props =>{
    return(
        <Box>
            <Flex>
                <HStack>
                    <InputGroup>
                        <InputLeftElement children={<SearchIcon color='gray.300' /> } />
                        <Input />
                    </InputGroup>
                    <Button>Buscar</Button>
                    <FilterMenu />
                </HStack>
                <Spacer />
                <Button 
                    leftIcon={<AddIcon/>} 
                    colorScheme='blue' 
                    size='md' 
                    onClick={props.handleSheet}
                >
                    Agregar
                </Button>
            </Flex>
        </Box>
    );
}

const FilterMenu = props =>{
    return(
        <Menu closeOnSelect={false} >
            <MenuButton as={IconButton} icon={<TriangleDownIcon />} />
            <MenuList>
                <MenuOptionGroup defaultValue="asc" title="Orden">
                    <MenuItemOption value='asc'>Ascendente</MenuItemOption>
                    <MenuItemOption value='desc'>Decendente</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}

export default SearchBar;