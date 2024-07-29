import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    studentid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    dateofbirth:{
        type:String,
        required:true
    },
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    followers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    profileimg: {
      type: String,
      default: "",
    },
    coverimg: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    link: { type: String, default: "" },
    likedpost: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User=mongoose.model("User",userSchema);

export default User;