require('@dotenvx/dotenvx').config()
const path = require('path');
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const plaidRoutes = require('./routes/plaidRoutes');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const FinancialModelingAPI = require('./routes/fmpRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        financialModelingAPI: new FinancialModelingAPI(),
    }),
    context: authMiddleware 
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

    app.use('/api', plaidRoutes);

    db.once('open', () => {
        app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
    });
}

startServer();