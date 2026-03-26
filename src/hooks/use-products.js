import { useEffect, useState } from 'react';


export function useProducts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    async function getProducts() {
        setLoading(true)

        await new Promise(resolve => setTimeout(resolve, 2000))

        try {
            const response = await fetch('http://localhost:3333/products');
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                setLoading(false);
            }

        }

    }
    useEffect(() => {
        getProducts();
    } , [])

    return{        data,
        loading,
        error}
    
}