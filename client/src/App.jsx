import Login from "./components/account/Login"
import Signup from "./components/account/Signup"
import Home from "./components/home/Home"
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from "./components/header/Header";
import { useState } from "react";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView";
import UpdatePost from "./components/create/UpdatePost";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const PrivateRoute = ({ isAuthenticated }) => {
  console.log("Logged In: ", isAuthenticated);
  return (
    isAuthenticated ?
    <>
      <Header/>
      <Outlet/>
    </>
    :
    <Navigate replace to="/login"/>
  )
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <div>
    <RecoilRoot>
        <Router>
          <Routes>
            
            <Route path={"/signup"} element={<Signup isUserAuthenticated={isUserAuthenticated}/>} />
            <Route path={"/login"} element={<Login isUserAuthenticated={isUserAuthenticated}/>} /> 
            
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/"} element={<Home/>}/>
            </Route>             
            
            <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/create"} element={<CreatePost/>}/>
            </Route>             
            
            <Route path="/details/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/details/:id"} element={<DetailView/>}/>
            </Route>             
            
            <Route path="/update/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/update/:id"} element={<UpdatePost/>}/>
            </Route>             
            
            <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/about"} element={<About/>}/>
            </Route>             
            
            <Route path="/contact" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path={"/contact"} element={<Contact/>}/>
            </Route>             
          
          </Routes>
        </Router>
      </RecoilRoot>
      </div>
  )
}

export default App
