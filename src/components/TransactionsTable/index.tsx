import { useEffect } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";

export function TransactionsTable() {
	useEffect(() => {
		api.get("transactions").then((response) => console.log(response.data));
	}, []);

	return (
		<Container>
			<table>
				<tbody>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>

					<tr>
						<td>Desenvolvimento de Website</td>
						<td className="deposit">R$12.000,00</td>
						<td>Freelance</td>
						<td>20/05/2022</td>
					</tr>

					<tr>
						<td>Aluguel</td>
						<td className="withdraw">- R$1.000,00</td>
						<td>Moradia</td>
						<td>20/05/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
