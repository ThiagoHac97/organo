import './menu.css'
const Menu = () => {
    return (
        <div className="menu">
            <ul className='menuList'>
                <li>
                    <a>
                        Imoveis
                    </a>
                </li>
                <li className='dropdown-list'>
                    <a>
                        Venda
                    </a>
                    <div className="dropdown-content">
                        <a>Imoveis</a><br></br>
                        <a>Pontos Comerciais</a><br></br>
                        <a>Lotes</a><br></br>
                        <a>Apartamentos</a><br></br>
                    </div>
                </li>
                <li className='dropdown-list'>
                    <a>
                        Locação
                    </a>
                    <div className="dropdown-content">
                        <a>Imoveis</a> <br></br>
                        <a>Pontos Comerciais</a><br></br>
                        <a>Lotes</a><br></br>
                        <a>Apartamentos</a><br></br>
                    </div>
                </li>
                <li>
                    <a>
                        Contato
                    </a>
                </li>
                <li>
                    <a>
                        Sobre
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu