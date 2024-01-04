import express, { Request, Response } from 'express';
import { ExamenDB } from './db/dbConfig';
import * as modelExamen from './db/models/examenprogreso2Integracion/init-models'


const app = express();
const PORT = 3000;

app.get('/api/:usuarioPar', async (req: Request, res: Response) => {

    try{
        const{usuarioPar}=req.params
        let usuario:any
        await modelExamen.usuario.findOne({raw: true, where: { 'Usuario': usuarioPar } }).then((res:any)=>{
            usuario=res
        })
        if(usuario){
            await llamadaApiGeo(usuario.ciudad)
        }


        res.json(usuario);

    }catch (error:any) {
        console.error('Error al realizar la petición:', error.message);
        res.json('Ocurrio error');

    }
    
});



const llamadaApiGeo=async(ciudad:string)=>{
    try {
        let lugar:any;
        const url = `https://geocode.xyz/${ciudad}?json=1&auth=682343438346333111693x45401`; // Reemplaza con la URL de la API externa
    
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
    
        const data = await response.json();

        await modelExamen.lugar.findOne({raw: true, where: { 'ciudad': data.standard.city } }).then((resp:any)=>{
            lugar=resp
        })
        console.log(lugar)

        if(lugar === null){
            await modelExamen.lugar.create({ 'ciudad': ciudad, 'pais': data.standard.countryname }).then()
        }


        return data;
      } catch (error:any) {
        console.error('Error al realizar la petición:', error.message);
      }
}


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  ExamenDB.authenticate().then(() => console.log('Database RestaurantePacifico connected...'));
  modelExamen.initModels(ExamenDB)
});
