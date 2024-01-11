import axios from "axios";

export const addData = async (data) => {
  const URL = "http://localhost:5000";
  
  try {
    
    return await axios.post(`${URL}/add`, { params: data });
  } catch (error) {
    console.error("Unknown error occurred", error);
  }
};
