import axios from "axios";

const API_URL = "https://dummyjson.com/products/category/"

export const getDresses = async () => {
    const responseDresses = await axios.get(API_URL + "womens-dresses")
    return responseDresses.data
}

export const getOneDress = async (id) => {
    const responseOneDr = await axios.get(API_URL + id)
    return responseOneDr.data
}