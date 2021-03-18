import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento do website</td>
            <td className="deposit">R$12.000</td>
            <td>Software</td>
            <td>12/03/2021</td>
          </tr>
          <tr>
            <td>Freelance para a Uber</td>
            <td className="deposit">R$20.000</td>
            <td>Software</td>
            <td>05/02/2021</td>
          </tr>
          <tr>
            <td>Compra do Macbook Pro</td>
            <td className="withdraw">-R$20.000</td>
            <td>Compras</td>
            <td>05/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}