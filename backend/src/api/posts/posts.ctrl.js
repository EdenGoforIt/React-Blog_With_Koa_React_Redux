let postId = 1;

const posts = [{ id: 1, title: 'title', body: 'content' }];

//post
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId++;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

//get lists
exports.list = (ctx) => {
  ctx.body = posts;
};

//get a post
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: 'No Post Found',
    };
    return;
  }
  ctx.body = post;
};

//delete a post
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      error: 'Post Not Found',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};

//edit the post
exports.replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      error: 'Post Not Found',
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

//patch or modify the specific field of the post
exports.update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'Post Not Found',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
