import { Schema,model } from 'mongoose';

const opSchema = new Schema({
    number: Number,
    date: Date,
    user: [{
        ref: 'User',
        type: Schema.Types.ObjectId
    }],
    model: [{
        ref: 'Model',
        type: Schema.Types.ObjectId
    }],
    color: [{
        ref: 'Color',
        type: Schema.Types.ObjectId
    }],
    line: [{
        ref: 'Line.js',
        type: Schema.Types.ObjectId
    }],
    schedule: [{
        ref: 'Schedule',
        type: Schema.Types.ObjectId
    }]
})

export default model('OP',opSchema);