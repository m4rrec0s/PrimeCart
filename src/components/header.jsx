import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

const user = "User"

function Header() {

    return(
        <div className="header">
            <div className="content-top">
                <Link to="/" className="icon"></Link>
                <div className="search-container">
                    <input type="search" name='search' className='input-search' placeholder='search for products, brands and more...' />
                    <button className='button-search'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search'/>
                    </button>
                </div>
                <div className="right-content">
                    <div className='cart'>
                        <FontAwesomeIcon icon={faCartShopping} className="highlight"/>
                    </div>
                    <div className="user-botton">
                        <button>
                            <FontAwesomeIcon icon={faUser} className="highlight" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="content-bottom">
                <button className="location">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} fontSize='20px'/>
                        <span>
                            <h4>{`Sent to ${user}.`}</h4>
                            <p>Happy Street - 123</p>
                        </span>
                    </div>
                </button>
                <div className="nav-buttons">
                    <Link to="/">Categorias</Link>
                    <Link to="/">Ofertas</Link>
                    <Link to="/">Histórico</Link>
                    <Link to="/">Supermercado</Link>
                    <Link to="/">Moda</Link>
                    <Link to="/">Mercado Play</Link>
                    <Link to="/">Vender</Link>
                    <Link to="/contact">Contato</Link>
                </div>
                <div className="right-content">
                    <Link to='/'>Sobre</Link>
                    <Link to='/'>Mais</Link>
                </div>
            </div>
        </div>
    )

}

export default Header