import { Schema,model } from 'mongoose';

const typeDefectSchema = new Schema({
    name: String
},
{
    versionKey: false
})

export default model('TypeDefect',typeDefectSchema);