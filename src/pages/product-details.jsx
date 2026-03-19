import { useParams,useNavigate  } from "react-router-dom"
import { useProducts } from "../hooks/use-products"

export function ProductsDetails() {
    const navigate = useNavigate()
    const {data} = useProducts()
    

    const { id } = useParams()
    const product = data.find(product => product.id === id)
    if (!product) {
        return <p>Produto não encontrado!</p>
    }
    return (
        <div>
            <button onClick={() => navigate(-1)}>Voltar</button>

            <img className="w-full h-96 object-cover rounded" src={product.image} alt={product.name} />

            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-zinc-300">{product.description}</p>
            <p className=" text-xl font-bold">
                R$ {product.price.toFixed(2)}
            </p>
        </div>
    )
}