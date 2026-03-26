import {ProductCard} from '../components/product-card';

import { useFavorites } from '../context/favorites-context';



/**
 * 收藏夹组件
 * 用于展示用户收藏的商品列表
 */
export function Favorites() {
    const {favorites} = useFavorites();
    return (
        <div>
            <h1>Favoritos</h1>
            {favorites.length === 0 ? (
                <p>Nenum produto com favorito</p>
            ) : (
                <div className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {favorites.map((product) =>(
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
            )}
        </div>
    )
}