import { Schema,model } from 'mongoose';

const secondSchema = new Schema({
    time: Date,
    quantity: Number,
    user:[{
        ref: 'User',
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

export default model('First',secondSchema);