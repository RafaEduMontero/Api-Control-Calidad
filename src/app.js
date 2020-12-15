import express from 'express';
import morgan from 'morgan';
import pkg from "../package.json";
import defectsRoutes from './routes/defects.routes';
import authRoutes from './routes/auth.routes';
import {createFoot, createRoles,createTurn,createTypeDefects} from './libs/initialSetup';
import userRoutes from './routes/user.routes';
import colorRoutes from './routes/colors.routes';
import modelRoutes from './routes/models.routes';
import lineRoutes from './routes/line.routes';

const app = express();
createRoles();
createTypeDefects();
createFoot();
createTurn();

app.set('pkg',pkg);

app.use(express.json());

app.use(morgan('dev'));

app.get('/',(req,res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/defects',defectsRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/colors',colorRoutes);
app.use('/api/models',modelRoutes);
app.use('/api/lines',lineRoutes);

export default app;