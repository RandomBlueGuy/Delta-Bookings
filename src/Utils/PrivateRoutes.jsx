import { Outlet } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useCookies } from "react-cookie";
import LoadingComp from "../pages/UniversalComponents/LoadingComp";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PrivateRoutes() {
  const [cookies] = useCookies("cookieToken");
  const location = useLocation();
  let Authorization = useJwt(cookies.cookieToken);

  return Authorization &&
    Authorization.decodedToken &&
    Authorization.decodedToken.role ? (
    <Outlet />
  ) : (
    <LoadingComp />
  );
}

export default PrivateRoutes;
