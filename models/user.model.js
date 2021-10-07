const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 55,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minLength: 6
        },
        picture: {
            type: String,
            //default: "./uploads/profil/random-user.png"
        },
        bio: {
            type: String,
            max: 1024
        },
        following: {
            type: [String]
        },
        followers: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

// play function before save 

userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;