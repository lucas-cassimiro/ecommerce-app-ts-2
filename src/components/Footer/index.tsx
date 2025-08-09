const navInst = [
    { name: 'Home', url: '/' },
    { name: 'Sobre', url: '/sobre' },
    { name: 'Produtos', url: '/produtos' },
    { name: 'Perguntas frequentes', url: '/perguntas-frequentes' },
    { name: 'Fale conosco', url: '/fale-conosco' },
]

const navHelp = [
    { name: 'Trocas e devoluções', url: '/trocas-e-devolucoes' },
    { name: 'Termos e condições', url: '/termos-e-condicoes' },
    { name: 'Produtos', url: '/produtos' },
    { name: 'Perguntas frequentes', url: '/perguntas-frequentes' },
    { name: 'Fale conosco', url: '/fale-conosco' },
]

const navAddress = [
    { name: 'Rua Vale do Silício, 321', url: '/rua-vale-do-silicio-321' },
    { name: 'São Francisco, Califórnia', url: '/sao-francisco-california' },
    { name: 'Estados Unidos da América', url: '/estados-unidos-da-america' },
    { name: '(34) 1234.5678', url: '/' },
    { name: 'vendas@ecommercedd.com', url: '/' },
]

export const Footer = () => {
    return (
        <footer className=" bg-purple-dark ">
            <div className="container flex justify-between ">
                <nav className="text-purple-light  mt-[57px] mb-[57px]">
                    <p className="text-white text-lg">Institucional</p>
                    <ul className="mt-4">
                        {navInst.map((nav, index) => (
                            <li className="mt-2" key={index}>
                                <a href={nav.url}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="text-purple-light mt-[57px] mb-[57px] ">
                    <p className="text-white text-lg">Ajuda</p>
                    <ul className="mt-4">
                        {navHelp.map((nav, index) => (
                            <li className="mt-2"  key={index}>
                                <a href={nav.url}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
              <nav className="text-purple-light mt-[57px] mb-[57px] ">
                    <p className="text-white text-lg">Endereço</p>
                    <ul className="mt-4">
                        {navAddress.map((nav, index) => (
                            <li className="mt-2"  key={index}>
                                <a href={nav.url}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="bg-purple-light text-center">
                <p>@2025 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
