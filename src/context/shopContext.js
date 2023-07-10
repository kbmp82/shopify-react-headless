//cotnains all context for project
import React, { Component } from 'react';
import Client from 'shopify-buy';


const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain:  process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN
  })
 
  
class ShopProvider extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    componentDidMount(){
        if(localStorage.getItem("checkoutId")){
           this.fetchCheckout(localStorage.checkoutId);
        }else{
            this.createCheckout();
        };
    }

    createCheckout = async () => {
        try{
        const checkout = await client.checkout.create();
         localStorage.setItem("checkoutId", checkout.id);
         this.setState({checkout});
        }
        catch(error){
            console.log("error", error);
        }
    }

    fetchCheckout = async (checkoutId) => {
        const checkout = await client.checkout.fetch(checkoutId);
        this.setState({checkout});
    }

    addItemToCheckout = async () => {}

    removeLineItem = async (lineItemIds) => {}

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({
            products
        })
    }

    fetchProductWithHandle = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({
            product
        })
    }

    toggleCart = (cartState) => {
        this.setState("isCartOpen")
        this.setState({isCartOpen: cartState === 'open' ? true : false})
    }

    toggleMenu = (menuState) => {
        this.setState({isMenuOpen: menuState === 'open' ? true : false})
    }
    
    render(){
        return(
           <ShopContext.Provider value={{...this.state, 
            fetchAllProducts: this.fetchAllProducts,
            fetchProductWithHandle: this.fetchProductWithHandle,
            toggleCart: this.toggleCart,
            toggleMenu: this.toggleMenu,
            addItemToCheckout: this.addItemToCheckout,
            removeLineItem: this.removeLineItem
           }}>
            {this.props.children}
           </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext }

export default ShopProvider