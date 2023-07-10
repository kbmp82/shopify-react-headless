import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image
} from "@chakra-ui/react";
import {CloseIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function Cart() {
  const { isCartOpen, toggleCart, toggleMenu, checkout, removeLineItem } =
    useContext(ShopContext);
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={() => toggleCart("close")}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => {
                return (
                  <Grid templateColumns=".5fr 2fr 2fr 1fr" gap="20px" key={item.id}>
                   <Flex>
                    <CloseIcon cursor="pointer" onClick={()=>removeLineItem(item.id)}/>
                   </Flex>
                   <Flex>
                    <Image boxSize="50px" h="auto" w="auto" src={item.variant.image.src} />
                   </Flex>
                   <Text>
                    {item.title}
                   </Text>
                   <Text>{item.variant.price.amount}</Text>
                  </Grid>
                );
              })}
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
