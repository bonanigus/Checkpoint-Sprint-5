import { Link } from 'react-router-dom';
import LogoImage from '../../assets/img/nav-images/Authenticals aaa.png';
import './style.scss';

export function HeaderDesktop() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <img src={LogoImage}/>
        </div>
        <div className="">
        <ul>
         <li className='nav-item'>
         <Link className="nav-link" to='/'>
           Início
          </Link>
         </li>
          <li className='nav-item'><a href="#sobre" className="nav-link">Sobre</a></li>
          <li className='nav-item'><a href="#Produtos" className="nav-link">Equipe</a></li>
          <li className='nav-item'><a href="#" className="nav-link">Avaliações</a></li>
          <li className='nav-item'><a href="#" className="nav-link">Contato</a></li>
          <li className='nav-item'><a href="#" className="nav-link">Localização</a></li>
          <li className='nav-item'>
          <Link className="nav-link" to='/conselhos'>
           Conselhos da IA
          </Link>
          </li>
        </ul>
        </div>
      </nav>
    </header>

    
  );
}