export const CardProduct = ({ products }: any) => {
    return (
        <>
            {products.map((product: any) => (
                <div key={product.id} className="flex flex-col gap-4">
                    <img className="" src={product.image} alt={product.name} />

                    <div className="flex flex-col bg-purple-dark py-10 px-5 rounded-b-[20px] mb-20">
                        <p>{product.name}</p>
                        <div>
                            <p>Cor: {product.color}</p>
                            {product.size && <p>Tamanho: {product.size}</p>}
                            {!product.size && <p>Tamanho: único</p>}
                        </div>
                        <p className="self-end text-green-gram text-2xl p-3n">
                            R$ {product.price},00
                        </p>
                        <button
                            type="button"
                            className="bg-purple-light py-4 rounded-sm cursor-pointer"
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
