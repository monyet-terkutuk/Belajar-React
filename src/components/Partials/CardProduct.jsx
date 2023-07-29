/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../Element/Button"

const CardProduct = ({children}) => {
    return (
        <div className="w-full my-2 max-w-xs bg-blue-950 border border-slate-700 rounded-lg shadow mx-3 flex flex-col justify-between">
            {children}        
        </div>
    )
}

const Header = ({imageURL, id}) => {
    return (
        <Link to={`/product/${id}`}>
            <img src={imageURL} alt="menu" className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </Link>
    )
}

const Body = ({children, name}) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white mb-3">{name.substring(0, 20)}...</h5>
                <p className="text-s text-white">
                    {children.substring(0, 100)}...
                </p>
            </a>
        </div>
    )
}

const Footer = ({price, HandleAddToCart, id}) => {
    return (
        <div className="flex items-center px-5 pb-5 justify-between">
            <span className="text-xl font-bold text-gray-300">$ {price.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</span>
            <Button className="bg-red-600 border border-blue-950" onClick={() => HandleAddToCart(id)}>Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct