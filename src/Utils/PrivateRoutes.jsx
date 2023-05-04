import { Outlet } from "react-router-dom";

import LoadingComp from "../pages/UniversalComponents/LoadingComp";

function PrivateRoutes({ auth }) {
  return auth ? <Outlet /> : <LoadingComp />;
}

export default PrivateRoutes;
