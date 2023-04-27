import { Outlet, Navigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import LoadingComp from '../pages/UniversalComponents/LoadingComp';

function PrivateRoutes() {
  const [cookies] = useCookies("cookieToken");
  let Authorization = useJwt(cookies.cookieToken);
//   console.log("Authorization", Authorization.decodedToken);

  return Authorization &&
    Authorization.decodedToken &&
    Authorization.decodedToken.role ? (
    <Outlet />
  ) : (
    <LoadingComp to= "/home" />
  );
}

export default PrivateRoutes;
