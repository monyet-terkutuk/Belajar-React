import CardProduct from "../components/Partials/CardProduct"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct >
                <CardProduct.Header imageURL={"https://source.unsplash.com/400x200/?cake"} />
                <CardProduct.Body title={"Cake Tart"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis? Facere maiores dolores ullam expedita cum ea, architecto tempore quaerat quidem voluptatibus!
                </CardProduct.Body>

                <CardProduct.Footer price={"320.000"} />
            </CardProduct>

            <CardProduct >
                <CardProduct.Header imageURL={"https://source.unsplash.com/400x200/?hamburger"} />
                <CardProduct.Body title={"Hamburger"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis? Facere maiores dolores ullam expedita cum ea, architecto tempore quaerat quidem voluptatibus!
                </CardProduct.Body>

                <CardProduct.Footer price={"20.000"} />
            </CardProduct>
        </div>
    )
}

export default ProductsPage