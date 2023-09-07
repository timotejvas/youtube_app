import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': '5723daa59cmshd6fdd9de20abe9ap1a19efjsnb51c262e525f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.log(error);
  }

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data;
  }