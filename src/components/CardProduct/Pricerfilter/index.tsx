//useState: Hook do React que permite criar variáveis de estado (armazenam valores dinâmicos dentro do componente).
//useEffect: Hook usado para rodar efeitos colaterais, como filtrar dados, chamadas de API, etc. Ele roda quando algo no componente muda.
import { useState, useEffect } from 'react'

//id: identificador único.
//label: texto que será mostrado ao usuário.
//min e max: faixa de preço que o filtro representa.
const optionsFilter = [
    { id: 1, label: 'R$ 89', min: 89, max: 90 },
    { id: 2, label: 'R$ 29', min: 29, max: 30 },
]

//products: lista completa dos produtos.
//onFilter: função que será chamada com os produtos filtrados.
const PriceFilter = ({ products, onFilter }: any) => {
    const [selectorFilter, setSelectorFilter] = useState<any>([]) //Cria um estado chamado selectorFilter que guarda os filtros selecionados. Começa como um array vazio [] (nenhum filtro ativo no início). setSelectorFilter é a função usada para atualizar esse estado.


    //Essa função é chamada sempre que o usuário clica em um checkbox.
    //Se o id já está na lista (prev.includes(id)), ele remove o filtro.
    //Se o id já está na lista (prev.includes(id)), ele remove o filtro.
    const toggleFilter = (id: any) => {
        setSelectorFilter((prev: any) =>
            prev.includes(id) ? prev.filter((f: any) => f !== id) : [...prev, id]
        )
    }

    //useEffect roda toda vez que selectorFilter ou products mudam.
    //Se nenhum filtro foi selecionado, retorna todos os produtos.
    //Senão, faz o filtro de verdade:
    // Para cada produto, verifica se algum filtro selecionado se encaixa no preço do produto.
    // Usa find() para obter os dados (min, max) do filtro.
    // Usa produto.price >= min && < max para aplicar o filtro.
    // O operador ?? garante que se min ou max forem undefined, usa 0 ou Infinity.
    useEffect(() => {
        const filtered =
            selectorFilter.length === 0
                ? products
                : products.filter((produto: any) =>
                      selectorFilter.some((id: any) => {
                          const filtro = optionsFilter.find((f) => f.id === id)
                          return (
                              produto.price >= (filtro?.min ?? 0) &&
                              produto.price < (filtro?.max ?? Infinity)
                          )
                      })
                  )
        
        //Depois de filtrar, envia o resultado para o componente pai usando a função onFilter.
        onFilter(filtered)
    }, [selectorFilter, products])

    return (
        <div  className="float-left p-4 border-r-1 border-purple-light">
            <h2 className="font-bold mb-2">Preço</h2>
            {optionsFilter.map((filtro) => (
                <label
                    key={filtro.id}
                    className="flex items-center space-x-2 mb-2"
                >
                    <input
                        type="checkbox"
                        checked={selectorFilter.includes(filtro.id)}
                        onChange={() => toggleFilter(filtro.id)}
                        className="form-checkbox h-4 w-4 accent-purple-light text-blue-500"
                    />
                    <span>{filtro.label}</span>
                </label>
            ))}
        </div>
    )
}

export default PriceFilter
