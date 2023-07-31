import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Partials/CardProduct"
import { getProducts } from "../service/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Partials/TableCart";
import Navbar from "../components/Layout/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    const { isDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin()

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);


    return (
        <Fragment>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-800 text-white"}`}>
                <div className="w-5/6 flex flex-wrap">
                { products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header imageURL={product.image} id={product.id} />
                        <CardProduct.Body name={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={ product.price } id={product.id} />
                    </CardProduct>
                )) }
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-900 ml-5 mb-2">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage