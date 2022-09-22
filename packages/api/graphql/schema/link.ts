import { gql } from 'apollo-server';

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
    links: () => {
      return [
        {
          category: 'Open Source',
          description: 'Fullstack React framework',
          id: '8a9020b2-363b-4a4f-ad26-d6d55b51bqes',
          imageUrl: 'https://nextjs.org/static/twitter-cards/home.jpg',
          title: 'Next.js',
          url: 'https://nextjs.org',
        },
      ];
    },
  },
};
