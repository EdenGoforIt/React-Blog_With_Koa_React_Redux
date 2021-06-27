import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});
//schema name is singular then it will make the schema as plura as a collection name (database name)
const Post = mongoose.model('Post', PostSchema);
export default Post;
