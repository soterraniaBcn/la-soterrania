import axios from 'axios'



 export  const getAllArtists = async ()=>{   
    
        const response = await axios.get (process.env.REACT_APP_BASE_URL+"/artistes")
        return response.data   
 } 
 
    
   {/* async getAllEspais(){
        const result = await axios.get (process.env.REACT_APP_BASE_URL+"/espais")
        return result.data 
    },
    
    async getAllEvents(){
        const result = await axios.get (process.env.REACT_APP_BASE_URL+"/esdeveniments")
        return result.data 
    }
}*/}





 