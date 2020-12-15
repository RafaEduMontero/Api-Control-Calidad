import User from "../models/User";

export const createUser = (req,res) =>{
    res.json('creating user');
}

export const getUsers = async(req,res) =>{
    const users = await User.find();
    res.json(users);
}

export const getUserById = async(req,res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.json(user);
}

export const deleteUserById = async(req,res) =>{
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({message: id + 'Eliminated'});
}
export const updateUserById = async(req,res) =>{
    const {id} = req.params;
    const updateUser = await User.findByIdAndUpdate(id,req.body,{
        new: true
    });

    res.json(updateUser);
}