import mongoose from "mongoose";
import { Password } from "../services/password";

interface UserAttrs {
  email: string;
  password: string;
}

// interface that describes the properties that a User document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

//interface to describe the properties an User model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;

      delete ret._id;
      delete ret.password;
    },
    versionKey: false
  }
});

userSchema.pre('save', async function() {
  if (this.isModified('password')) {
      this.password = await Password.toHash(this.password);
  }
});

userSchema.statics.build = (attr: UserAttrs) => {
  return new User(attr);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };