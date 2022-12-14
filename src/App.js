import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./pages/ProductsPage";
import ShoppingBagPage from "./pages/ShoppingBagPage";
import SubmitBtn from "./components/SubmitBtn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<ProductsPage />}></Route>
          <Route
            exact
            path="/shoppingBag"
            element={
              <>
                <ShoppingBagPage />
                <SubmitBtn />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
