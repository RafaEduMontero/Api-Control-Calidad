import { Schema,model } from 'mongoose';

const defectSchema = new Schema({
    description: String,
    typedefect:[{
        ref: "TypeDefect",
        type: String
    }],
},{
    timestamps: true,
    versionKey: false
})

export default model('Defect',defectSchema);