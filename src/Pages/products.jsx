import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Partials/CardProduct"
import Button from "../components/Element/Button";
import { getProducts } from "../service/product.service";
import { getUsername } from "../service/auth.service";

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUsername(getUsername(token));
        } else {
            window.location.href = "/login";
        }
    }, [])

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart",JSON.stringify(cart));
       }
    }, [cart, products]);

    const HandleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    const HandleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    }

    // useRef
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    // const HandleAddToCartRef = (id) => {
    //     cartRef.current = [...cartRef.current, { id, qty: 1 }];
    //     localStorage.setItem("cart",JSON.stringify(cartRef.current));
    // }

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = ""
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart]);

    return (
        <Fragment>
            <div className="flex h-20 justify-end items-center px-10 bg-red-600 text-white">
                {username ? <p className="text-xl">{username}</p> : <p className="text-xl">Please login</p>}
                <Button className="ml-5 bg-blue-950 border border-blue-950" onClick={HandleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                { products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header imageURL={product.image} />
                        <CardProduct.Body name={product.title}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={ product.price } id={product.id} HandleAddToCart={HandleAddToCart}/>
                    </CardProduct>
                )) }
                </div>
                <div className="w-3/6">
                    <h1 className="text-3xl font-bold text-blue-900 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id == item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 20)}...</td>
                                        <td>Rp. {product.price.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td>$ {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                                    </tr>
                                )
                            })}
                            <tr className="font-bold" ref={totalPriceRef}>
                                <td colSpan={3}>Total Price : </td>
                                <td className="text-red-600">$ {totalPrice.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage