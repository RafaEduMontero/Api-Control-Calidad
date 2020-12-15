import { Schema,model } from 'mongoose';

const firstSchema = new Schema({
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

export default model('First',firstSchema)
