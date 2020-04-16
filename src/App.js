import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import ChooseUs from './components/ChooseUS/ChooseUs';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import SingleFood from './components/SingleFood/SingleFood';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';




function App() {


  const[cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    door: null, road: null, flat: null, business: null, address: null
  });

  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data)
  }

  const cartHandler = (data) => {
    const alreadyAdded = cart.find(crt => crt.id === data.id);
    const newCart = [...cart, data]
    setCart(newCart);
    if (alreadyAdded) {
      const reamingCarts = cart.filter(crt => cart.id !== data);
      setCart(reamingCarts);
    } else {
      const newCart = [...cart, data]
      setCart(newCart);
    }

  }

  const clearCart =  () => {
       setCart([]);
  }



  const checkOutItemHandler = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if (item.id === productId) {
        item.quantity = productQuantity;
      }
      return item;
    })

    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }

  console.log(cart);



  return (
    <div className="App">
    
     <Router>
       <Switch>
         <Route exact path="/">
          <Header cart={cart}></Header>
          <Banner></Banner>
          <Content cart={cart}></Content>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         <Route path="/food/:id">
            <Header cart={cart}></Header>
            <SingleFood cartHandler={cartHandler}></SingleFood>
            <Footer></Footer>
         </Route>
         <Route path="/checkout">
           <Header cart={cart}></Header>
           <Checkout></Checkout>
           <Footer></Footer>
         </Route>
         <Route path="/cart">
            <Header cart={cart}></Header>
            <Cart deliveryDetails={deliveryDetails} deliveryDetailsHandler ={deliveryDetailsHandler} checkOutItemHandler={checkOutItemHandler} clearCart={clearCart} cart={cart}></Cart>
            <Footer></Footer>
         </Route>
         <Route path="*">
            <Header cart={cart}></Header>
            <Banner></Banner>
            <Error></Error>
         </Route>
       </Switch>
     </Router>

    
      
    </div>
  );
}

export default App;
