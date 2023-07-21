import CardProduct from "../components/Partials/CardProduct";

const products = [
    {
        id: 1,
        image: "https://source.unsplash.com/400x200/?cake",
        name: "Cake Tart",
        price: 320.000,
        description: ""
    }
];  


const TestPage = () => {
    return (
        <div className="flex justify-center py-5">
        {products.map((product) => {
                 
                    <CardProduct >
                        <CardProduct.Header imageURL={product.image} />
                        <CardProduct.Body name={ product.name }>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                
            })}
            
        </div>
    )
}

export default TestPage