import User from '../models/User';

export const checkDuplicateUsernameOrEmail = async(req, res, next) =>{
    const user = await User.findOne({username: req.body.username})

    if(user) return res.json({message: 'The user already exist'})

    const email = await User.findOne({email: req.body.email})

    if(email) return res.json({message: 'The email already exist'})

    next();
}