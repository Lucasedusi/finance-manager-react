import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: "1",
					title: "Desenvolvimento Freelance",
					type: "deposit",
					category: "Dev",
					amount: 5000,
					createdAt: new Date(),
				},
				{
					id: "2",
					title: "Aluguel",
					type: "withdraw",
					category: "Moradia",
					amount: 1000,
					createdAt: new Date(),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create("transaction", data);
		});
	},
});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
