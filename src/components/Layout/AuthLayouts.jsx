/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const AuthLayouts = (props) => {
    const {title,children, type} = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
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
                Don't have an account?
                <Link className="font-bold  text-red-600" to="/register">
                    Register
                </Link>
            </p>
      )
    }

    if (type === "register") {
        return (
            <p className="text-sm mt-5 text-center">
                Already have an account?
                <Link className="font-bold  text-red-600" to="/login">
                    Login
                </Link>
            </p>
      )
    }
  }
  

export default AuthLayouts