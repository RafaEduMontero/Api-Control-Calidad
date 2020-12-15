import Defect from '../models/Defect';
import TypeDefect from '../models/TypeDefect';

export const createDefect = async(req,res) =>{
    console.log(req.body);
    const {description,typedefect} = req.body;

    const newDefect = new Defect({
        description: description
    })

    if(typedefect){
        const foundTypeDefect = await TypeDefect.find({name: {$in: typedefect}});
        newDefect.typedefect = foundTypeDefect.map(typeDe => typeDe.name)
    }

    const defectSave =  await newDefect.save();
    res.json(defectSave);
}

export const getDefect = async(req,res) =>{
    const defects = await Defect.find();
    res.json(defects);
}
export const getDefectById = async(req,res) =>{
    const {id} = req.params;
    const defect = await Defect.findById(id);
    res.json(defect);
}
export const deleteDefectById = async(req,res) =>{
    const {id} = req.params;
    await Defect.findByIdAndDelete(id);
    res.json();
}
export const updateDefectById = async(req,res) =>{
    const {id} = req.params;
    const updateDefect = await Defect.findByIdAndUpdate(id,req.body,{
        new: true
    });

    res.json(updateDefect);
}