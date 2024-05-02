

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


//api for adding income
 export const uploadIncomeAPI = async(reqBody) =>{
     return await commonAPI('POST',`${serverURL}/incomes`,reqBody)
     
}
<<<<<<< HEAD

//api to get uploaded incomes
 export const getIncomeAPI = async()=>{
     return await commonAPI('GET',`${serverURL}/incomes`,"")
 }

 // api to delete an income
 export const deleteAnIncomeAPI= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/incomes/${id}`,{})
}
=======
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
>>>>>>> 8d27398aa24d54543a28422287503f0d25408f52
