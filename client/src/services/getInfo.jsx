import axios from 'axios'

const GetEvents = {
  async getAll() {
    const result = await axios.get(process.env.REACT_APP_BASE_URL + '/events', {
      headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
    })
    return result.data
  },
}

export default GetEvents
