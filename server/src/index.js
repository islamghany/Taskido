const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
require("dotenv").config({ path: ".env" });

// typeDefs: where your graphql schema that will deal with DB
// i can make custom schema(schema.graphql) for me --> best approach
//and i can use the orignal one (prisma.graghql) but and is not best approach

// resolvers: the queries and the mutation that will deal with the prisma graphql schema
// context===ctx: object get passed to the resolver function, it will contain req,and the db

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers: {
    Mutation,
    Query,
  },
  context: (req) => ({
    ...req,
    db: new Prisma({
      typeDefs: "./src/generated/prisma.graphql",
      endpoint: "https://eu1.prisma.sh/islam-mostafa-ef8610/note-app/dev",
    }),
  }),
});

server.express.use(cookieParser());
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
  }
  next();
});
const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ["http://localhost:1800"], // your frontend url.
  },
};
server.start(opts, () => {
  console.log("Server is running on port 4000");
});
