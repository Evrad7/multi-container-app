import axiosService from "./axios"


const getAllIndexes=async ()=>{
    const response=await axiosService.get("/fibos")
    return response.data
}

const getAllFiboEntries=async ()=>{
    const response=await axiosService.get("fibos/cache")
    return response.data
}

const addIndex=async (index)=>{
    try{
        const response=await axiosService.post("/fibos", {"index":index})
        return response

    }
    catch(e){
        console.log(e)
    }
}

export {getAllIndexes, addIndex, getAllFiboEntries}