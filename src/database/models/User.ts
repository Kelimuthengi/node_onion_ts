import { Schema, Types, model }  from "mongoose";

export const DOC_NAME = 'User'
export const COLL_NAME = 'users'

export default interface User{
    _id:Types.ObjectId,
    username:string,
    email:string,
    password:string,
    location:string,
    // createdAt?:string,
    // updatedAt?:string,
}

const schema = new Schema<User>({
    username:{type:Schema.Types.String, trim: true},
    email:{type: Schema.Types.String, trim: true, unique: true}
})

schema.index({_id: 1})
schema.index({email: 1})

export const UserModel = model<User>(DOC_NAME, schema, COLL_NAME)