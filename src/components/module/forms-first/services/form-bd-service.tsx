import axios from "axios";
import API from "../../../API/ConnectionAPI";
import { Formulario, ResponseHelper } from '../../../interfaces/interfaces-global';

const APIForm = "Formulario";
const urlAPI = API.connection();
const url_all = urlAPI + APIForm;
const FormBDService = {

    async create(formulario: Formulario) : Promise<ResponseHelper> {
        let result = await axios.post(url_all, formulario, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return result.data as ResponseHelper;
    },
    
    async get(): Promise<ResponseHelper>{
      let result = await axios.get(url_all);
      return result.data as ResponseHelper;
    },
    
    getById(id: number) {
      // console.log('Obtener registro por ID', id);
    },
  
    update(id: number, data: any) {
      // console.log('Actualizar registro', id, data);
    },
  
    delete(id: number) {
      // console.log('Eliminar registro', id);
    }
  };
  
  export default FormBDService;
  