import { Outlet } from "react-router-dom";

import Page404 from "../pages/404/Page404";
import LoadingComp from '../pages/UniversalComponents/LoadingComp';

function PrivateRoutes({ auth }) {
  return auth ? <Outlet /> : <LoadingComp />;
}

export default PrivateRoutes;
