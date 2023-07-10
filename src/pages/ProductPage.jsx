import React, {useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image, Heading, Button,Flex  } from "@chakra-ui/react";

export default function ProductPage(){

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext);

    useEffect(() =>{
        fetchProductWithHandle(handle)
    },[fetchProductWithHandle, handle])

    if(!product.title) return <div>Loading...</div>

    return(
       <Box  maxW='1280px' mx="auto">
        <Grid templateColumns="repeat(2, 1fr)" gap="50px">
            <Image src={product.images[0].src} />
            <Box>
                <Flex gap="30px" flexDirection="column">
                <Heading>{product.title}</Heading>
                <Text fontSize="20px">${product.variants[0].price.amount}</Text>
                <Text>{product.description}</Text>
                <Button
                onClick={() => {addItemToCheckout(product.variants[0].id, 1)}}>Add To Cart</Button>
                </Flex>
              
            </Box>
        </Grid>
       </Box>
    )
}