import { Link } from 'react-router-dom';
import { BsCoin }  from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { TbReportAnalytics } from 'react-icons/tb';
import './styles.css';

export default function Cabecalho() {
  return (
    <header className="container-cabecalho">
        <span className='logo'>
            Coin Market
        </span>
        <nav>
            <Link to='/'> <BsCoin/> Cotações </Link>
            <Link to='usuarios'> <HiUsers/> Usuários </Link>
            <Link to='relatorios'> <TbReportAnalytics/> Relatórios </Link>
        </nav>
    </header>
  )
}
