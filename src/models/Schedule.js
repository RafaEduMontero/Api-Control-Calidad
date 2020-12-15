import { Schema,model } from 'mongoose';

const scheduleSchema = new Schema({
    start: Date,
    end: Date,
    turn: [{
        ref: 'Turn',
        type: Schema.Types.ObjectId
    }],
    first: [{
        ref: 'First',
        type: Schema.Types.ObjectId
    }],
    second: [{
        ref: 'Second',
        type: Schema.Types.ObjectId
    }],
    found:[{
        ref: 'Found',
        type: Schema.Types.ObjectId
    }]
})

export default model('Schedule',scheduleSchema);