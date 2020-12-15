import { Schema,model } from 'mongoose';

const lineSchema = new Schema({
    number: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Line',lineSchema);