import knex from "knex";
import Cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";

const db = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
});

const typeDefs = gql`
  # This "Post" type defines the queryable fields for every post in our data source.
  type Post {
    post_title: String
    post_author: String
    post_content: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "posts" query returns an array of zero or more Posts (defined above).
  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts(parent, args, { db }) {
      return db.select("*").from("wp_posts");
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
});

const handler = apolloServer.createHandler({ path: "/api" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
