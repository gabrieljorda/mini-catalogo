export function Search({value, onChange}) {
    return (
        <div className="my-4">
            <input
                className="w-full p-2 bg-zinc-800 rounded outline-0"
                type="text"
                onChange={(e) => onChange(e.target.value)}
                value={value}
                placeholder="Buscar produtos..."
            />
        </div>
    )
}