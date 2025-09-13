import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./views/Product/Components/ProductDetail/ProductDetail";

const Home = lazy(() => import("./views/Home/Home"));
const Product = lazy(() => import("./views/Product/Product"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:idProduct" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
