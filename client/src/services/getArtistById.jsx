import axios from "axios";

const GetArtistById = {   
    async getOne(id){ 
       const result = await axios.get (`process.env.REACT_APP_BASE_URL/artistes/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem("user")}` } }
       )
       return result.data  
    }
} 

export default GetArtistById;