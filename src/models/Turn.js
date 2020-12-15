import { Schema,model } from 'mongoose';

const turnSchema = new Schema({
    description: String,
    start: Date,
    end: Date
},{
    timestamps: true,
    versionKey: false
})

export default model('Turn',turnSchema);