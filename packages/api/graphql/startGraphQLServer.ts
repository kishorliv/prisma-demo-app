import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import * as schemas from '.';

export default async function startGraphQLServer({ app }: { app: any }) {
  const schema = makeExecutableSchema({
    typeDefs: [...Object.values(schemas).map((s) => s.typeDefs)],
    resolvers: [...Object.values(schemas).map((s) => s.resolvers)],
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
}
