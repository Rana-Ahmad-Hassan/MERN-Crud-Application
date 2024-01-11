import axios from "axios"

export const addData=async(data)=>{

const URL="http://localhost:5000/"
    try {
      await  axios.get(`${URL}/add`,data)
    } catch (error) {
        console.log("Unknown error is occured")
    }
}