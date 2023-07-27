import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Account from "./Pages/Account/Account";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
