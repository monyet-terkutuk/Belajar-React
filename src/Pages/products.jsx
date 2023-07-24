import { Fragment } from "react";
import CardProduct from "../components/Partials/CardProduct"
import Button from "../components/Element/Button";

const products = [
    {
        id: 1,
        image: "https://source.unsplash.com/400x200/?spagetti",
        name: "Spagetti",
        price: "320.000",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero."
    },
    {
        id: 2,
        image: "https://source.unsplash.com/400x200/?pizza",
        name: "Pizza Hut",
        price: "230.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    
   
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
    const HandleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }
    return (
        <Fragment>
            <div className="flex h-20 justify-end items-center px-10 bg-red-600 text-white">
                {email ? <p className="text-xl">{email}</p> : <p className="text-xl">Please login</p>}
                <Button className="ml-5 bg-black" onClick={HandleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                { products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header imageURL={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={ product.price } />
                    </CardProduct>
                )) }
            </div>
        </Fragment>
    )
}

export default ProductsPage