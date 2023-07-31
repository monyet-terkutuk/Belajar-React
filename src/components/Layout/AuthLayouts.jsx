/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode";


const AuthLayouts = (props) => {
    const { title, children, type } = props
    const { isDarkMode, setDarkMode } = useContext(DarkMode);
    return (
        <div className={`flex justify-center min-h-screen items-center ${ isDarkMode && "bg-slate-800 text-white"}`}>
            <div className="w-full max-w-xs">
                <button className="absolute right-2 top-2 bg-slate-700 p-2 text-white rounded" onClick={() => setDarkMode(!isDarkMode)}>
                    { isDarkMode ? "Light" : "Dark"}
                </button>
                <h1 className="text-red-600 text-3xl font-bold mb-2">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details!</p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    )
}


const Navigation = ({type}) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account?{" "}
                <Link className="font-bold  text-red-600" to="/register">
                    Register
                </Link>
            </p>
      )
    }

    if (type === "register") {
        return (
            <p className="text-sm mt-5 text-center">
                Already have an account?{" "}
                <Link className="font-bold  text-red-600" to="/login">
                    Login
                </Link>
            </p>
      )
    }
  }
  

export default AuthLayouts