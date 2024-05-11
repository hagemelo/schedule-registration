import axios from 'axios';

const urlBase =  process.env.REACT_BACKEND_API || '';

const defaultHeaders = {
    'Access-Control-Allow-Origin': '*'
}

export class BackendApi {

    async get(path: string): Promise<any> {

        try{
            const result = await axios.get(`http://localhost:3000${path}`, {headers: defaultHeaders});
            return result.data;
        }catch(error){
            console.error('Error get', error);

        }
        return 
    }

    async post(path: string, data: any): Promise<any> {

        try{
            const result = await axios.post(`${urlBase}${path}`, data);
            return result.data;
        }catch(error){
            console.error('Error fetching data:', error);

        }
        return {};
    }

}
