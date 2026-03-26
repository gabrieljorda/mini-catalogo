import { createContext, useContext, useState } from "react";



const FavoritesContext = createContext();

export function FavoritesContextProvider({ children }) {

    const [favorites,setFavorites] = useState([]);

    function toggleFavorite(product){
        setFavorites((state) => {
            const isFavorite = state.find(item => item.id === product.id);
            if(isFavorite) 
                return state.filter(product => product.id != isFavorite.id);
            return [...state,product];
        })
    }

    return(
        <FavoritesContext.Provider value = {{favorites, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites(){
    const context = useContext(FavoritesContext);
    
    
    return context;
}