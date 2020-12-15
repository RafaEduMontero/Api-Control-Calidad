import Color from '../models/Color';

export const createColor = async(req,res) =>{
    console.log(req.body);
    const {code,description} = req.body;

    const newColor = new Color({
        code: code,
        description: description
    })

    const colorSave =  await newColor.save();
    res.json(colorSave);
}

export const getColor = async(req,res) =>{
    const colors = await Color.find();
    res.json(colors);
}
export const getColorById = async(req,res) =>{
    const {id} = req.params;
    const color = await Color.findById(id);
    res.json(color);
}
export const deleteColorById = async(req,res) =>{
    const {id} = req.params;
    await Color.findByIdAndDelete(id);
    res.json();
}
export const updateColorById = async(req,res) =>{
    const {id} = req.params;
    const updateColor = await Color.findByIdAndUpdate(id,req.body,{
        new: true
    });

    res.json(updateColor);
}