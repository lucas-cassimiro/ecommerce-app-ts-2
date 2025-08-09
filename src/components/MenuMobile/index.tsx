import Close from '../../assets/close.png'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'

export const MenuMobile = ({ menu, setMenu, navLinks }: any) => {
    return (
        <div className="relative">
            <div
                className={`fixed top-0 left-0 h-screen w-full bg-purple-dark z-10 transition-transform duration-300 ease-in-out ${
                    menu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="border-b border-purple-light py-5 px-5">
                    <button onClick={() => setMenu(false)}>
                        <img src={Close} />
                    </button>
                    <img src={Logo} alt="Logo da empresa Dev em Dobro" />
                    <button className="bg-purple-light px-8 py-4 rounded-sm">
                        Entrar ou cadastrar-se
                    </button>
                    <button>
                        <img src={Cart} alt="Ícone do carrinho" />
                        <p>Carrinho de compras</p>
                    </button>
                </div>

                <ul className="px-5">
                    {navLinks.map((nav: any, index: any) => (
                        <li key={index}>
                            <a href={nav.url}>{nav.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
