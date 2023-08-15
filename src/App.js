import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import {
  Home,
  ContactUs,
  About,
  Login,
  ShoppingCard,
  Warranty,
  Favorite,
} from "./pages/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoppingCard" element={<ShoppingCard />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
