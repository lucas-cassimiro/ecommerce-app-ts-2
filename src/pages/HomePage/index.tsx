import { useState } from 'react'
import PriceFilter from '../../components/CardProduct/Pricerfilter'
import { ProductList } from '../../components/ProductList'
import { products as initialProducts } from '../../mocks'

export const HomePage = () => {
    const [filteredProducts, setFilteredProducts] = useState(initialProducts)

    return (
        <div className="gap-8 px-4 mt-20">
            <aside>
                <PriceFilter
                    products={initialProducts}
                    onFilter={setFilteredProducts}
                />
            </aside>
            <section className="container">
                <h1 className="text-2xl mb-8">Produtos</h1>
                <ProductList products={filteredProducts} />
            </section>
        </div>
    )
}
