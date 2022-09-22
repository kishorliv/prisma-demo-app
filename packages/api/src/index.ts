import express from 'express';
import startGraphQLServer from '../graphql/startGraphQLServer';

const PORT = 3001;
const app = express();

startGraphQLServer({ app })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log('Could not start the server: ', e);
  });
