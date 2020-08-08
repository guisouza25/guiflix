import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu() {
    return ( //aqui retorna um JSX
        <nav className="Menu">
            <Link to="/">
                <img className='Logo' src={Logo} alt='GuiFlix Logo' />
            </Link>

            <Button to='/cadastro/Video/'> {/*O Button já é um Link - Styled Components*/}
                Novo vídeo {/*aqui é o children*/}
            </Button>
        </nav>

    );
}

export default Menu; 