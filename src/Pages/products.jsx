import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Partials/CardProduct"
import Button from "../components/Element/Button";


const products = [
    {
        id: 1,
        image: "https://source.unsplash.com/400x200/?spagetti",
        name: "Spagetti",
        price: 74000,
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero."
    },
    {
        id: 2,
        image: "https://source.unsplash.com/400x200/?pizza",
        name: "Pizza Hut",
        price: 120000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    {
        id: 3,
        image: "https://source.unsplash.com/400x200/?sushi",
        name: "Sushi",
        price: 240000,
        description: "Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    // {
    //     id: 4,
    //     image: "https://source.unsplash.com/400x200/?sandwich",
    //     name: "Sandwich",
    //     price: 45000,
    //     description: "Lorem ipsum dolor sit ametelit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    // },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart",JSON.stringify(cart));
       }
    }, [cart]);

    const HandleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
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
                {email ? <p className="text-xl">{email}</p> : <p className="text-xl">Please login</p>}
                <Button className="ml-5 bg-blue-950 border border-blue-950" onClick={HandleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-5/6 flex flex-wrap">
                { products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header imageURL={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={ product.price } id={product.id} HandleAddToCart={HandleAddToCart}/>
                    </CardProduct>
                )) }
                </div>
                <div className="w-2/6">
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
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id == item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp. {product.price.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td>Rp. {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                                    </tr>
                                )
                            })}
                            <hr className="mt-5 border border-transparent" />
                            <tr className="font-bold" ref={totalPriceRef}>
                                <td colSpan={3}>Total Price : </td>
                                <td className="text-red-600">Rp. {totalPrice.toLocaleString('id-ID', {styles:'currency', currency:'IDN'})}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsPage