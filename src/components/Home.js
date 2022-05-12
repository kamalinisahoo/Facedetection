import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Identify from "./Identify";
import Report from "./Report";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}     
      <div className
        ="border 
        pl-12 py-4 space-x-8
         flex  items-center 
        ">
      <Link to="Report" className=
            {`text-blue-400 
            font-bold 
            text-xl
            md:text-3xl`}>REPORT</Link>
            <Link to="Identify" className="text-blue-400 font-bold text-xl md:text-3xl">IDENTIFY</Link>
        </div>
        </div>
        {/* <Routes>
        <Route path="/Identify" element={<Identify/>} />
          <Route path="/Report" element={<Report/>} />
      </Routes> */}
        {/* <Routes>
          <Route path="/Report">
            <Report />
          </Route>
          <Route path="/Identify">
            <Identify />
          </Route>
        </Routes> */}
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;

