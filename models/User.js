const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },

    userType: {
      type: String,
      default: "2",
      enum: ["1", "2"],
      enumNames: ["admin", "student"],
    },
    emailAddress: {
      type: String,
      required: true,
      lowercase: true, 
      unique: true
    },
    
    password: {
        type: String,
        required: true,
        minlength: [8, "Your Password is too weak !"]
    }
  },
  {
    timestamps: true,
  }
);

// module.exports = mongoose.model("User", userSchema);

const User = mongoose.model("User", userSchema);
module.exports = {User};
