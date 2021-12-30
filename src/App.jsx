 
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"; 

const App = () => {
  const user = true;
  return  (
     <div> 
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products/:category">
              <ProductList />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/register">
            {user ? <Redirect to='/' /> : <Register /> }
            </Route>
            <Route path="/login">
              {user ? <Redirect to='/' /> : <Login /> }
            </Route>
          </Switch> 
        </BrowserRouter>
     </div>
  );
};

export default App;