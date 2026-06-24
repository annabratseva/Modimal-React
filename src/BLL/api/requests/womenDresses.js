import axios from "axios";

const API_URL = "https://dummyjson.com/products/category/"
const SEARCH_URL = "https://dummyjson.com/products/search"

export const getDresses = async () => {
    const responseDresses = await axios.get(API_URL + "womens-dresses")
    return responseDresses.data
}

export const getOneDress = async (id) => {
    const responseOneDr = await axios.get(API_URL + id)
    return responseOneDr.data
}

export const searchProducts = async (query) => {
    const response = await axios.get(SEARCH_URL, {
        params: { q: query }
    })
    return response.data
}