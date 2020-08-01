import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu() {
  return ( //aqui retorna um JSX
    <nav className="Menu">
        <a href="../../index.js">
           <img className='Logo' src={Logo} alt='GuiFlix Logo' />
        </a>

        <Button as='a' href='/'>
            Novo vídeo {/*aqui é o children*/}
        </Button>
    </nav>

    );
}

export default Menu; 