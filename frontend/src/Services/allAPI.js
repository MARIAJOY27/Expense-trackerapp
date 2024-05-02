

//api for adding income

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

 export const uploadIncomeAPI = async(reqBody) =>{
     return await commonAPI('POST',`${serverURL}/incomes`,reqBody)
     
}
//api for adding expense
export const uploadExpenseAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/expenses`,reqBody)
}
//api to get uploaded expense
export const getUploadExpenseAPI = async()=>{
    return await commonAPI('GET',`${serverURL}/expenses`,"")
}
//api to delete an expense
export const deleteAnExpenseAPI= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/expenses/${id}`,{})
}
