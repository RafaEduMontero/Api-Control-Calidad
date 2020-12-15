import { Schema,model } from 'mongoose';

const footSchema = new Schema({
    name: String
},
{
    versionKey: false
})

export default model('Foot',footSchema);