import './styles.css';

export default function Rodape() {

    const data = new Date().toISOString();

  return (
    <footer>
        Data da Última atualização: { data }
    </footer>
  )
}
