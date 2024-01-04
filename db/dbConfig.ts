import {Sequelize} from 'sequelize'

export const ExamenDB:Sequelize = new Sequelize('examenprogreso2Integracion', 'root', '0997927874', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})