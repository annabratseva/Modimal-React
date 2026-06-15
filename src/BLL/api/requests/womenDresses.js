import axios from "axios";

const API_URL = "https://dummyjson.com/products/category/"

export const getDresses = async () => {
    const responseDresses = await axios.get(API_URL + "womens-dresses")
    return responseDresses.data
}