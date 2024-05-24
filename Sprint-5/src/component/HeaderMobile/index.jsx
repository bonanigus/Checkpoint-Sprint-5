import { useState } from 'react';
import LogoImage from '../../assets/img/nav-images/Authenticals aaa.png';
import HambClose from '../../assets/img/icon/menu fechado - bootstrap.svg';
import HambNormal from '../../assets/img/icon/menu aberto - bootstrap.svg';
import './style.scss';
import { Link } from 'react-router-dom';

export function HeaderMobile() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <img src={LogoImage} alt="Logo" />
        </div>
        <img
          className="menu_icon"
          src={menu ? HambNormal : HambClose}
          alt="Ícone de Menu"
          onClick={() => setMenu(!menu)}
        />

        {menu ? (
          <nav className="nav-bar">
            <div className="nav-list">
              <ul>
                <li className='nav-item'>
                <Link to='/' className="nav-link">
                  Início
                </Link>
                </li>
                <li className='nav-item'><a href="#sobre" className="nav-link">Sobre</a></li>
                <li className='nav-item'><a href="#Produtos" className="nav-link">Equipe</a></li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Avaliações
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contato
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../" className="nav-link">
                    Localização
                  </a>
                </li>
                <li className='nav-item'>
                  <Link to='/conselhos' className="nav-link">Conselhos da IA</Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
