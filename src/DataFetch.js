import axios from "axios";


const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    // console.log(listData[1]);
    console.log(response);
    // return { listData, response };
  } catch (error) {
    console.log(error.response);
    return error;
  }
};

export default fetchData;
