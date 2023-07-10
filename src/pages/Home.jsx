import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image  } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  if (!products) return <div>Loading...</div>;

  return (
    <Box maxW='1280px'  mx="auto">
      <Grid templateColumns="repeat(3,1fr)">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.handle}`}>
              <Box _hover={{ opacity: "80%" }} textAlign="center">
                <Image
                  mx="auto"
                  objectFit="cover"
                  boxSize="400px"
                  src={product.images[0].src}
                />
                <Text>{product.title}</Text>
                <Text>{product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
