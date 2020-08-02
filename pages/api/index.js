import Cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
});

const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books(parent, args, context) {
      return [
        {
          title: "Harry Potter and the Chamber of Secrets",
          author: "J.K. Rowling",
        },
        {
          title: "Jurassic Park",
          author: "Michael Crichton",
        },
      ];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({}),
});

const handler = apolloServer.createHandler({ path: "/api" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
