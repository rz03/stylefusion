import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
