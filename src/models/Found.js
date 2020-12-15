import { Schema,model } from 'mongoose';

const foundtSchema = new Schema({
    time: Date,
    quantity: Number,
    user:[{
        ref: 'User',
        type: Schema.Types.ObjectId
    }],
    defect:[{
        ref: 'Defect',
        type: Schema.Types.ObjectId
    }],
    foot:[{
        ref: 'Foot',
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

export default model('Found',foundtSchema);