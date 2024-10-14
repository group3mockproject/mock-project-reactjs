import { useState } from "react";
import MainRoute from "./MainRoute";
import AuthRoute from "./AuthRoute";

const Router = () => {
  const [isAuth, setIsAuth] = useState(true);
  return <div>{isAuth ? <MainRoute /> : <AuthRoute />}</div>;
};

export default Router;
