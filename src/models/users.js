import {Schema,Model,Types} from "mongoose";
const userSchema = new Schema({
    _id:{type:Types.ObjectId},
    mail:String,
    password:String
})
export const userModel = new Model("users",userSchema);
