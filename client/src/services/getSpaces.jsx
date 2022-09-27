import axios from "axios"

const GetSpaces = {   
    async getAll(){ 
       const result = await axios.get (process.env.REACT_APP_BASE_URL+"/espais", { headers: { authorization: `Bearer ${localStorage.getItem("user")}` } }
       )
       return result.data  
    }
} 

export default GetSpaces