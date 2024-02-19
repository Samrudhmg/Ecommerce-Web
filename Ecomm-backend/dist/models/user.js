import mongoose from "mongoose";
import validator from 'validator';
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, " please enter ID"]
    },
    name: {
        type: String,
        required: [true, " please Enter a Name"]
    },
    email: {
        type: String,
        unique: [true, " Email alreday exists"],
        required: [true, " please Enter your Email ID"],
        validate: validator.default.isEmail,
    },
    photo: {
        type: String,
        required: [true, " please add photo"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please enter your gender"]
    },
    dob: {
        type: Date,
        required: [true, "Enter your DOB"]
    }
}, {
    timestamps: true,
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
});
export const User = mongoose.model("User", schema);
