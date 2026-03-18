export function Filters({ 
    minPrince,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange }) {
return (
    <div className="flex gap-2 my-3">
        <input 
        type="number"
        value={minPrince}
        onChange={(e) => onMinPriceChange(e.target.value)} 
        placeholder="Preço mínimo"
        className="p-2 bg-zinc-800 rounded  outline-0"
        />
        <input 
        type="number"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)} 
        placeholder="Preço máximo"
        className="p-2 bg-zinc-800 rounded  outline-0"
        />
    </div>
)
}