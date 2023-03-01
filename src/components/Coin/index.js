import PropTypes from 'prop-types';
import './styles.css';

// props 
function Coin( { id, nome, preco, variacao } ) {
    // console.log(props);
    // const { nome, preco } = props;  // destructuring
  return (
    <tr key={id}>
        <td> { id } </td>
        <td> { nome } </td>
        <td> { preco } </td>
        <td> { variacao } </td>
    </tr>
  )
}

Coin.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  variacao: PropTypes.number.isRequired
}

export default Coin;
