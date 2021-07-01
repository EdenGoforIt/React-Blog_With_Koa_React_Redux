import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

export const write = async (ctx) => {
  //validation
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const read = async (ctx) => {
  try {
    const { id } = ctx.params;
    const post = Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.rquest.body, {
      new: true,
    });
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};
