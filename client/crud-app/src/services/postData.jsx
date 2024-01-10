import axios from "axios"

const URL=""
export const addData=async(data)=>{
    try {
      await  axios.get(URL,data)
    } catch (error) {
        console.log("Unknown error is occured")
    }
}