import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pudim',
          type: 'withdraw',
          category: 'Padaria',
          amount: 15,
          createdAt: new Date('2022-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Sorvete',
          type: 'withdraw',
          category: 'Supermercado',
          amount: 28,
          createdAt: new Date('2022-02-13 09:00:00')
        },
        {
          id: 3,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2022-02-15 09:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = '/api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);