import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css'

const user = "User"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme,
    backgroundColor: '#fff',
    border: '1px solid 021A32',
    marginLeft: 0,
    width: '100%',
    maxWidth: '600px',
    height: '40px',
    '&:focus': {
        border: '3px solid #2870EA',
        fontWeight: 400,
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    fontSize: '15px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    },
}));

function Header() {

    return(
        <div className="header">
            <div className="content-top">
                <div className="icon"></div>
                <Search>
                    <StyledInputBase
                    placeholder="search for products, brands and more..."
                    inputProps={{ 'Helvetica': 'search' }}
                    />
                    <button className='button-search'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search'/>
                    </button>
                </Search>
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
                    <a href="#">Categorias</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Histórico</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Moda</a>
                    <a href="#">Mercado Play</a>
                    <a href="#">Vender</a>
                    <a href="#">Contato</a>
                </div>
                <div className="right-content"></div>
            </div>
        </div>
    )

}

export default Header