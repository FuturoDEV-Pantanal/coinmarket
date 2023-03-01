import './styles.css';

export default function Coin( { id, nome, preco, variacao, sapato } ) {
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
