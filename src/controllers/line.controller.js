import Line from '../models/Line';


export const createLine = async(req,res) =>{
    console.log(req.body);
    const {number} = req.body;

    const newLine = new Line({
        number: number
    })

    const lineSave =  await newLine.save();
    res.json(lineSave);
}

export const getLine = async(req,res) =>{
    const lines = await Line.find();
    res.json(lines);
}
export const getLineById = async(req,res) =>{
    const {id} = req.params;
    const line = await Line.findById(id);
    res.json(line);
}
export const deleteLinelById = async(req,res) =>{
    const {id} = req.params;
    await Line.findByIdAndDelete(id);
    res.json();
}
export const updateLinelById = async(req,res) =>{
    const {id} = req.params;
    const updateLine = await Line.findByIdAndUpdate(id,req.body,{
        new: true
    });

    res.json(updateLine);
}