import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./views/Product/Components/ProductDetail/ProductDetail";
import Loading from "./components/Loading/Loading";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import Blog from "./views/Blog/Blog";
import Wishlist from "./views/Wishlist/Wishlist";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:idProduct" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog  />} />
        <Route path="/wishlist" element={<Wishlist  />} />
      </Routes>
    </Suspense>
  );
}

export default App;
