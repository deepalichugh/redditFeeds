import axios from 'axios';

export const getPosts = async (limit, after) => {
  const data = await axios({
    method: 'get',
    url: `https://www.reddit.com/r/aww.json?limit=${limit}${after ? '&after=' + after : ''}`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => (response.data.data))
    .catch((err) => {
      console.log(`Failed due to ${err}`)
    });
    return data;
};

export default getPosts;