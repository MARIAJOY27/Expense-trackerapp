

//api for adding income

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

 export const uploadIncome = async(reqBody) =>{
     return await commonAPI('POST',`${serverURL}/incomes`,reqBody)
     
}