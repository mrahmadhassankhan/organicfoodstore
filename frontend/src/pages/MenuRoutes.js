import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader";

const Home = React.lazy(() => import("./Home/Home"));
const AddtoCart = React.lazy(() => import("../components/AddtoCart/AddtoCart"));
const AboutUs = React.lazy(() => import("./About/AboutUs"));
const Categories = React.lazy(() => import("./Categories/Categories"));
const Contact = React.lazy(() => import("./Contact/Contact"));
const Login = React.lazy(() => import("./Login/Login"));
const CheckOut = React.lazy(() => import("../components/CheckOut/CheckOut"));
const SearchShow = React.lazy(() => import("./SearchShow/SearchShow"));
const ForgetPassword = React.lazy(() =>
  import("./ForgetPassword/ForgetPassword")
);
const Address = React.lazy(() => import("./Address/Address"));

const MenuRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/search-results" element={<SearchShow />} />
          <Route path="/address" element={<Address />} />
          <Route path="/address2" element={<Address />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MenuRoutes;
