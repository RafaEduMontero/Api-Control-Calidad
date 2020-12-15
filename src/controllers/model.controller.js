import Model from '../models/Model'

export const createModel = async(req,res) =>{
    console.log(req.body);
    const {sku,denomination,objetive} = req.body;

    const newModel = new Model({
        sku: sku,
        denomination: denomination,
        objetive: objetive
    })

    const modelSave =  await newModel.save();
    res.json(modelSave);
}

export const getModel = async(req,res) =>{
    const models = await Model.find();
    res.json(models);
}
export const getModelById = async(req,res) =>{
    const {id} = req.params;
    const model = await Model.findById(id);
    res.json(model);
}
export const deleteModelById = async(req,res) =>{
    const {id} = req.params;
    await Model.findByIdAndDelete(id);
    res.json();
}
export const updateModelById = async(req,res) =>{
    const {id} = req.params;
    const updateModel = await Model.findByIdAndUpdate(id,req.body,{
        new: true
    });

    res.json(updateModel);
}