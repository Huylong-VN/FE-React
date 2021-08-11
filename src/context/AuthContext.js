import React, { useState, } from "react";


export const AuthContext = React.createContext();

const AuthContextProvider = ({children})=>{
    //State

    const [isAth,setAth]=useState(localStorage.getItem("token")!==""?true:false)
  

    const toggleAuth=()=>{
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("Id");
        setAth(!isAth)
      
    }


    //context data
    const authContextData={
        isAth,
        toggleAuth,
        
    }
    // setTimeout(()=>{
    //     localStorage.removeItem("role");
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("Id");
    //     alert("Bạn đã hết thời gian đăng nhập vui lòng đăng nhập lại !!1")
    //     React.history.push("./login")
    // },10800000)
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider