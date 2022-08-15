const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: string,
        required: [true, "Please add a name"],
    },
    email: {
        type: string,
        required: [true, "Please add a email"],
        unique: true,
    },
    password: {
        type: string,
        required: [true, "Please add a password"],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,

    }
},
    {
        timestamps: true,
    })

module.export = mongoose.model('user', userSchema);