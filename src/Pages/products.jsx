import Button from "../components/Element/Button"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <div className="w-full max-w-sm bg-white border border-green-600 rounded-lg shadow-md">
                <a href="#">
                    <img src="/images/burger.jpg" alt="menu" className="p-8 rounded-t-lg" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-green-700">Burger King</h5>
                        <p className="text-s text-green-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident autem libero reiciendis sequi consectetur impedit quod facilis? Facere maiores dolores ullam expedita cum ea, architecto tempore quaerat quidem voluptatibus!
                        </p>
                    </a>
                </div>
                <div className="flex items-center px-5 pb-5 justify-between">
                    <span className="text-xl font-bold text-gray-500">Rp 200.000</span>
                    <Button className="bg-green-700">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage