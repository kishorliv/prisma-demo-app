import { gql } from 'apollo-server';
import prisma from '../../util/db';

export const typeDefs = gql`
  type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]
  }
`;

export const resolvers = {
  Query: {
    links: async () => {
      return prisma.link.findMany();
    },
  },
};
