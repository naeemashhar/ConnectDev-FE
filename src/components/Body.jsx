import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const PUBLIC_ROUTES = ["/", "/login", "/signup", "/about","/connections","/profile","/requests","/premium"];

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.user?.user);
  const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);

  const fetchUser = async () => {
    if (user) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error?.response?.status === 401) {
        navigate("/login");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isPublicRoute) {
      fetchUser();
    }
  }, [location.pathname]);

  return (
    <div>
      {!isPublicRoute && <Navbar />}
      <Outlet />
      {!isPublicRoute && <Footer />}
    </div>
  );
};

export default Body;
