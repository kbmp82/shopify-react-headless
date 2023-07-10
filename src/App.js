import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
