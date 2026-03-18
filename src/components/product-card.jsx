import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
export function ProductCard({ product }) {
  const navigate = useNavigate()

  function handleViewDetails() {
    navigate(`/detalhe-prduto/${product.id}`)
  }
  return (
    <div className="bg-zinc-950 p-4 rounded shadow-md text-white">
      <img
        className="w-full h-40 object-cover rounded"
        src={product.image}
        alt={product.name}
      />

      <div>
        <h2 className="mt-3 font-semibold">{product.name}</h2>
        <p className="text-zinc-300">{product.description}</p>
        <p className="font-bold">R$ {product.price.toFixed(2)}</p>
      </div>

      <div className="flex gap-2 mt-2">
        <button onClick={handleViewDetails} className="flex-1 bg-blue-500 text-white py-1 rounded">
          Ver detalhes
        </button>

        <button className="text-red-500">
          <Heart />
        </button>
      </div>
    </div>
  );
}
