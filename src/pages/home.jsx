import { Filters } from "../components/filters";
import { ProductList } from "../components/product-list";
import { Search } from "../components/search";
import { useState } from "react";
import { useProducts } from "../hooks/use-products";


export function Home() {
    const [query, setQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const {data, loading, error} = useProducts();

    if(loading) return <p>Carregando...</p>
    if(error) return <p>Erro ao carregar: {error}</p>

    const filtered = data
        .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
        .filter(product => minPrice == "" || product.price >= Number(minPrice))
        .filter(product => maxPrice == "" || product.price <= Number(maxPrice))

    return (
        <div>
            <Search value={query} onChange={setQuery} />
            <Filters
                minPrince={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
            />
            <ProductList products={filtered} />
        </div>
    )
}