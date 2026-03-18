import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import {Home} from "./pages/Home";
import { Favorites } from "./pages/favorites";
import { ProductsDetails } from "./pages/product-details";
export default function App() {
  
  return (
    <div className=" flex flex-col h-screen">
      <Header />

      <main className="flex-1 container mx-auto p-4">
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/detalhe-prduto/:id' element={<ProductsDetails/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
