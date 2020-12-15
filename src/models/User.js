import { Schema,model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name:{
        type: String
    },
    surname:{
        type: String
    },
    username:{
        type: String,
        unique: true
    },
    dni:{
        type: Number,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    },
],
},
{
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    return await bcrypt.hash(password,salt);
}

userSchema.statics.comparePassword = async(password, receivePassword) =>{
    console.log(password);
    console.log(receivePassword)
    const bool = await bcrypt.compare(password,receivePassword);
    console.log(bool)
    return bool

}

export default model('User',userSchema);