import './styles.css';

// props 
export default function Coin( { id, nome, preco, variacao } ) {
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
