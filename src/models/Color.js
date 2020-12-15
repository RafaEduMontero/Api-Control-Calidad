import { Schema,model } from 'mongoose';

const colorSchema = new Schema({
    code: String,
    description: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Color',colorSchema);