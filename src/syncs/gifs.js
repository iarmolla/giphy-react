import axios from "axios";

const apiKey = "&api_key=0B51hSwE70d4vAAQ8c0hpujaR1IcLdKT";

async function getTrending(updateTrending) {
  const request = axios
    .get(`https://api.giphy.com/v1/gifs/trending?${apiKey}`)
    .then((res) => {
        updateTrending(res.data)
    });
}

export default getTrending;
