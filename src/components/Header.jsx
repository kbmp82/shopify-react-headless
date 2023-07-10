import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line, RiMenuFill } from "react-icons/ri";


export default function Header(){

    const { toggleCart, toggleMenu, checkout } = useContext(ShopContext);

    return (
        <Flex  mb="25px" bg="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
         <Icon cursor="pointer" fill="white" w="30px" h="auto" as={RiMenuFill}></Icon>
          <Image src={'/Logologo_1.svg'}  boxSize="100px"/>
          <Icon onClick={() => toggleCart('open')} cursor="pointer" fill="white" w="30px" h="auto" as={RiShoppingCart2Line}></Icon>
         
        </Flex>
    )
}