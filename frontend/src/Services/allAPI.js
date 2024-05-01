

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


//api for adding income
 export const uploadIncomeAPI = async(reqBody) =>{
     return await commonAPI('POST',`${serverURL}/incomes`,reqBody)
     
}

//api to get uploaded incomes
 export const getIncomeAPI = async()=>{
     return await commonAPI('GET',`${serverURL}/incomes`,"")
 }

 // api to delete an income
 export const deleteAnIncomeAPI= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/incomes/${id}`,{})
}
