/* eslint-disable react/prop-types */
import Button from "../Element/Button"

const CardProduct = ({children}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-green-600 rounded-lg shadow-md mx-3">
            {children}        
        </div>
    )
}

const Header = ({imageURL}) => {
    return (
        <a href="#">
            <img src={imageURL} alt="menu" className="p-8 rounded-t-lg" />
        </a>
    )
}

const Body = ({children,title}) => {
    return (
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-green-700">{title}</h5>
                <p className="text-s text-green-700">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = ({price}) => {
    return (
        <div className="flex items-center px-5 pb-5 justify-between">
            <span className="text-xl font-bold text-gray-500">Rp {price}</span>
            <Button className="bg-green-700">Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct