import {useState} from "react";
import MainRoute from "./MainRoute";
import AuthRoute from "./AuthRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "@/screens/login/LoginPage.jsx";

const Router = () => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/*" element={isAuth? <MainRoute/>: <AuthRoute/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
