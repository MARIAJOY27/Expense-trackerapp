

//api for adding income

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

 export const uploadIncomeAPI = async(reqBody) =>{
     return await commonAPI('POST',`${serverURL}/incomes`,reqBody)
     
}