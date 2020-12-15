import mongoose from 'mongoose';

mongoose.connect("mongodb://Localhost/inspeccioncalidad",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))