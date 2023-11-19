import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Login } from "../pages/Login"
import { DashboardRoute } from "./DashboardRoute"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import {firebase } from "../firebase/firebaseConfig"
import { login } from "../actions/auth"

export const AppRoute = () =>{
  const dispatch = useDispatch();
  const[checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect (() =>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
        dispatch(login(user.uid,user.email))
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false);
      }
      setChecking(false);
    },[dispatch, setIsLoggedIn, setChecking])
  })
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/*" element={<DashboardRoute/>}/>
          </Routes>
        </BrowserRouter>
    )
}