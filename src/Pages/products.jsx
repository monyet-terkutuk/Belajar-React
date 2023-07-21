import CardProduct from "../components/Partials/CardProduct"

const products = [
    {
        id: 1,
        image: "https://source.unsplash.com/400x200/?spagetti",
        name: "Spagetti",
        price: "320.000",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis? Facere maiores dolores ullam expedita cum ea, architecto tempore quaerat quidem voluptatibus! lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    {
        id: 2,
        image: "https://source.unsplash.com/400x200/?pizza",
        name: "Pizza Hut",
        price: "230.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    {
        id: 3,
        image: "https://source.unsplash.com/400x200/?steak",
        name: "Steak",
        price: "230.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    },
    {
        id: 4,
        image: "https://source.unsplash.com/400x200/?rendang",
        name: "Pizza Hut",
        price: "230.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis?"
    }
];

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

            

            { products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header imageURL={product.image} />
                    <CardProduct.Body title={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={ product.price } />
                </CardProduct>
            )) }
        </div>
    )
}

export default ProductsPage