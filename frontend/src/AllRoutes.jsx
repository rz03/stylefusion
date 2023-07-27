import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
