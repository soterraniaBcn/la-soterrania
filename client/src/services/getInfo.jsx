 import axios from "axios"


 const GetEvents = {   
     async getAll(){ 
        const result = await axios.get (process.env.REACT_APP_BASE_URL+"/events")
        console.log(result.data)    
     }
 }
 
 export default GetEvents;



