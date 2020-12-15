import Foot from '../models/Foot';
import Role from '../models/Role';
import Turn from '../models/Turn';
import TypeDefect from '../models/TypeDefect'

export const createRoles = async () =>{
    try {
        const count = await Role.estimatedDocumentCount()
        if(count > 0) return;
        const values = await Promise.all([
            new Role({name: 'calidad'}).save(),
            new Role({name: 'linea'}).save(),
            new Role({name: 'admin'}).save()
        ])
    console.log(values);
    } catch (error) {
        console.error|(error)
    }
}

export const createTypeDefects = async () =>{
    try {
        const count = await TypeDefect.estimatedDocumentCount()
        if(count > 1) return;
        const values = await Promise.all([
            new TypeDefect({name: 'Observado'}).save(),
            new TypeDefect({name: 'Reproceso'}).save()
        ])
        console.log(values)
    } catch (error) {
        console.log(error)
    }
}

export const createFoot = async () =>{
    try {
        const count = await Foot.estimatedDocumentCount()
        if(count > 0) return;
        const values = await Promise.all([
            new Foot({name: 'Derecho'}).save(),
            new Foot({name: 'Izquierdo'}).save()
        ])
        console.log(values)
    } catch (error) {
        console.log(error)
    }
}

export const createTurn = async () =>{
    try {
        const count = await Turn.estimatedDocumentCount()
        if(count > 0) return;
        const values = await Promise.all([
            new Turn({description: 'Mañana',
                      start: new Date(Date.UTC(96,11,1,6,0,0)),
                      end: new Date(Date.UTC(96,11,1,13,59,0))
        }).save(),
        new Turn({description: 'Tarde',
                      start: new Date(Date.UTC(96,11,1,14,0,0)),
                      end: new Date(Date.UTC(96,11,1,21,59,0))
        }).save(),
        new Turn({description: 'Noche',
                      start: new Date(Date.UTC(96,11,1,22,0,0)),
                      end: new Date(Date.UTC(96,11,1,5,59,0))
        }).save()
        ])
        console.log(values)
    } catch (error) {
        console.log(error)
    }
}