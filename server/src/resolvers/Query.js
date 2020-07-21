const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { forwardTo } = require("prisma-binding");
// if an endpoint does not have to do some operation i can use forwardTo dirctly to deal with it
// and it will return the same
const Queries = {
  task: forwardTo("db"),
  async tasks(_, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error("you must be signed in!");
    }
    return ctx.db.query.tasks(
      {
        where: {
          user: { id: userId },
          ...args.where,
        },
      },
      info
    );
  },
  currentUser(_, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
  async activateAccount(_, { token }, ctx, info) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error(`Expired Link. Signup again`);
    }
    if (!decodedToken) {
      throw new Error(`Expired Link. Signup again`);
    }
    const email = decodedToken.email.trim().toLowerCase();
    const password = await bcrypt.hash(decodedToken.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          email,
          password,
          name: decodedToken.name,
        },
      },
      info
    );
    return { message: decodedToken.name };
  },
  async isTokenTrue(_, { token }, ctx, info) {
    let user;
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      user = await ctx.db.query.user({
        where: { id },
      });
    } catch (err) {
      console.log(err);
      throw new Error(`Invalid Token, Please Signup instead`);
    }
    if (!user) {
      throw new Error(`Invalid Token, Please Signup instead`);
    }
    return { message: user.name };
  },
};

module.exports = Queries;
