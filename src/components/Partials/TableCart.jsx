/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data );

    const [totalPrice, setTotalPrice] = useState(0);

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

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = ""
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart]);

    return (
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
    )
}

export default TableCart