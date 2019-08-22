const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:String,
    username:String,
    picture:String
})

mongoose.model("users",userSchema);
