import Styles from './Sidebar.module.css';
import Logo from '../../../src/assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside className={Styles.sidebar}>
      <img src={Logo} alt="" />

      <nav>
        <ul>
          <li><Link to="/cadastrar-item">Cadastrar item</Link></li>
          <li><Link to="/listar-itens">Listar itens</Link></li>
        </ul>
      </nav>
      
      
    </aside>
  )
}

export default Sidebar;