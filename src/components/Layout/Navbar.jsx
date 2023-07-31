import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Element/Button"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const HandleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
}

const Navbar = () => {
    const { isDarkMode, setDarkMode } = useContext(DarkMode);
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart])
    return (
        <div className="flex h-20 justify-end items-center px-10 bg-red-600 text-white">
            {username ? <p className="text-xl">{username}</p> : <p className="text-xl">Please login</p>}
            <Button className="ml-5 bg-blue-950 border border-blue-950" onClick={HandleLogout}>Logout</Button>
            <Button className="text-white rounded" onClick={() => setDarkMode(!isDarkMode)}>
                    { isDarkMode ? "Light" : "Dark"}
            </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    )
}

export default Navbar