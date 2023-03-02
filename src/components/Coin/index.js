import PropTypes from 'prop-types';
import './styles.css';

// props 
function Coin( { id, nome, preco, variacao } ) {
    // console.log(props);
    // const { nome, preco } = props;  // destructuring

    const isVariacaoNegativa = variacao < 0;  // boolean
    console.log('variacao eh negativa', isVariacaoNegativa);

  return (
    <tr key={id}>
        <td> { id } </td>
        <td> { nome } </td>
        <td> { preco } </td>
        <td className={isVariacaoNegativa ? 'var-negativa' : 'var-positiva'}> { variacao } </td>
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
