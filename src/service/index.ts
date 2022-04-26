import axios from "axios"
import {responseData} from "./types"


const baseUrl = 'https://viacep.com.br/ws'

const fixedParams = "json"

export const serviceCep = async (cep:String): Promise <responseData> => {
    const result = await axios.get<responseData>(`${baseUrl}/${cep}/${fixedParams}`)
    .then((response)=>{
      return response.data
    })
    .catch((error)=>{
      return error
    })
    return result
  }

  