import axios from 'axios'

const GetSpaceById = {
  async getOne(id) {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/espais/${id}`,
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } },
    )
    return result.data
  },
}

export default GetSpaceById
