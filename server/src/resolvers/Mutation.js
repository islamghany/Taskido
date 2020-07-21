const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Mutations = {
  async createTask(_, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that!");
    }
    const Task = await ctx.db.mutation.createTask(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info
    );
    return Task;
  },
  async updateTask(_, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("Unauthorized to do that");
    }
    let t;
    try {
      t = await ctx.db.query.task(
        { where: { id: args.id } },
        `
                 {user{
                                  	id
                                  } }
        		`
      );
    } catch (err) {
      throw new Error("Unknowen Error please try later");
    }
    console.log(t, t.user.id);
    if (!t || t.user.id !== ctx.request.userId) {
      throw new Error("Unauthorized to do that");
    }

    const updates = { ...args };
    delete updates.id;
    const Task = await ctx.db.mutation.updateTask(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
    return Task;
  },
  async deleteTask(_, args, ctx, info) {
    const where = { id: args.id };
    const task = await ctx.db.query.task(
      { where },
      `{
         	id
         	title
         }`
    );
    return ctx.db.mutation.deleteTask({ where }, info);
    return ctx;
  },
  async signup(_, { email, name, password }, ctx, info) {
    try {
      const token = jwt.sign(
        { name, email, password },
        process.env.JWT_SECRET,
        { expiresIn: "10m" }
      );
      const emailDate = {
        from: "noreply@mernauth.com",
        to: email,
        subject: "Account activation link",
        html: `<h1>Please use the following link to activate your account</h1>
          <p>${process.env.CLIENT_URL}/activate-account/${token}</p>
          <hr />
          <p>this email may conatan sensitive information</p>
   	      <p>${process.env.CLIENT_URL}</p>
   	   `,
      };
      const sent = await sgMail.send(emailDate);
    } catch (err) {
      console.log(err);
      throw new Error(`Signing up failed, please try again later.`);
    }
    return { message: email };
    // const email = args.email.trim().toLowerCase();
    // const password = await bcrypt.hash(args.password,10);
    // const user =await ctx.db.mutation.createUser({
    // 	data:{
    // 		email,
    // 		password,
    // 		name:args.name
    // 	}
    // },
    // info);
    // const token=jwt.sign({userId:user.id},process.env.JWT_SECRET);
    // ctx.response.cookie('token',token,{
    // 	httpOnly:true,
    // 	max:1000*60*60*24 // 1 month
    // })
    // return user;
  },

  async signin(_, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({
      where: { email },
    });
    if (!user) {
      throw new Error(`No such user found for ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Invalid Password`);
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      max: 1000 * 60 * 60 * 24, // 1 month
    });
    return user;
  },
  async forgetPassword(_, { email }, ctx, info) {
    const user = await ctx.db.query.user({
      where: { email },
    });
    if (!user) {
      throw new Error(`No such user found for ${email}`);
    }
    try {
      const token = jwt.sign(
        { id: user.id, email, name: user.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "10m",
        }
      );
      const emailDate = {
        from: "noreply@mernauth.com",
        to: email,
        subject: "Password reset link",
        html: `<h1>Please use the following link to activate your account</h1>
          <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
          <hr />
          <p>this email may conatan sensitive information</p>
   	      <p>${process.env.CLIENT_URL}</p>
   	   `,
      };
      const sent = await sgMail.send(emailDate);
      user.resetPasswordLink = token;
      let id = user.id;
      delete user.id;
      await ctx.db.mutation.updateUser(
        {
          data: user,
          where: { id },
        },
        info
      );
    } catch (err) {
      console.log(err);
      throw new Error("Unknowen error please try again later.");
    }
    return { message: email };
  },
  async resetPassword(_, { newPassword, resetPasswordLink }, ctx, info) {
    let decoded;
    try {
      decoded = jwt.verify(resetPasswordLink, process.env.JWT_SECRET);
    } catch (err) {
      throw new Error(`Expired Link. try again later`);
    }
    const user = await ctx.db.query.user({
      where: { id: decoded.id },
    });
    if (!user) {
      throw new Error(`Something went wrong. Try later`);
    }

    try {
      delete user.id;
      user.resetPasswordLink = "";
      user.password = await bcrypt.hash(newPassword, 10);
      await ctx.db.mutation.updateUser(
        {
          data: user,
          where: { id: decoded.id },
        },
        info
      );
    } catch (err) {
      throw new Error(`Something went wrong. Try later`);
    }
    return { message: user.name };
  },
  signout(_, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "signed out successed" };
  },
};

module.exports = Mutations;
