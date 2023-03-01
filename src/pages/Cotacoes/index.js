import './styles.css';

const coins = [
    { id: 1, sigla: 'BTC', nome: 'BitCoin', preco: 115000.25, variacaoPerc: 3.55 }, 
    { id: 2, sigla: 'ETH', nome: 'Ethereum', preco: 8114.03, variacaoPerc: 1.94 },
    { id: 3, sigla: 'USDC', nome: 'USDCoin', preco: 5.09, variacaoPerc: -0.15 },
    { id: 4, sigla: 'LTC', nome: 'LiteCoin', preco: 447.33, variacaoPerc: 1.99 } 
];

export default function Cotacoes() {
  return (
    <table className="tabela-cotacoes">
        <thead>
            <tr>
                <th>id</th>
                <th>Moeda</th>
                <th>Preço</th>
                <th>Variação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> { coins[0].id } </td>
                <td> { coins[0].nome } </td>
                <td> { coins[0].preco } </td>
                <td> { coins[0].variacaoPerc } </td>
            </tr>
            <tr>
                <td> { coins[1].id } </td>
                <td> { coins[1].nome } </td>
                <td> { coins[1].preco } </td>
                <td> { coins[1].variacaoPerc } </td>
            </tr>
        </tbody>
    </table>
  )
}
