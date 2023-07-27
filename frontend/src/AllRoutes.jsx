import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Homepage from "./Pages/Homepage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
