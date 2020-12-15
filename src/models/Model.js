import { Schema,model } from 'mongoose';

const modelSchema = new Schema({
    sku: String,
    denomination: String,
    objetive: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Model',modelSchema);