import { Outlet } from "react-router-dom";
import Page404 from "../pages/404/Page404";

function PrivateRoutes({ auth }) {
  return auth ? <Outlet /> : <Page404 />;
}

export default PrivateRoutes;
